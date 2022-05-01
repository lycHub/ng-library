import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  mergeWith,
  SchematicsException,
  move,
  chain,
  FileEntry,
  forEach,
  MergeStrategy, renameTemplateFiles
} from '@angular-devkit/schematics';
import {normalize, strings, virtualFs, workspaces} from '@angular-devkit/core';

import {
  ArrayLiteralExpression, CallExpression, createSourceFile,
  Identifier, isClassDeclaration, isImportDeclaration, ObjectLiteralExpression, PropertyAssignment, ScriptTarget, Node
} from 'typescript';

import { getWorkspace } from '@schematics/angular/utility/workspace';

export interface HelloWorldSchema {
  name: string;
  project: string;
  path: string;
}

export function helloWorld(options: HelloWorldSchema): Rule {
  return async (tree: Tree, _context: SchematicContext) => {

    // const host = createHost(tree);
    // const { workspace } = await workspaces.readWorkspace('/', host);
    const workspace = await getWorkspace(tree);


    if (!options.project && typeof workspace.extensions.defaultProject === 'string') {
      options.project = workspace.extensions.defaultProject;
    }

    const project = (options.project != null) ? workspace.projects.get(options.project) : null;

    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    // ${project.extensions.projectType}
    if (!options.path) {
      options.path = `${project.sourceRoot}/app/${options.name}`;
    }

    // console.log('options>>>', options);
    const componentFragmentName = strings.classify(options.name);
    const fileName = `hello-${options.name}.component`;
    const templateSource = apply(url('./files'), [ // 筛选源头，默认是整个tree
      template({ // applyTemplates 相当于template + renameTemplateFiles
        ...options,
        selectorName: strings.dasherize(options.name),
        componentFragmentName
      }),
      renameTemplateFiles(), // xxx.template => xxx
      move(normalize(options.path)), // 输出目录
      forEach((fileEntry: FileEntry) => { // 尝试上面用applyTemplates可以改名
        if (tree.exists(fileEntry.path)) {
          // tree.overwrite(fileEntry.path, fileEntry.content);
          tree.rename(fileEntry.path, fileEntry.path.replace('.tpl', ''));
        }
        return fileEntry;
      })
    ]);


    // 將 app.module.ts 的程式碼讀取出來
    const targetPath = project.sourceRoot + '/app/app.module.ts';
    const text = tree.read(targetPath) || [];
    const sourceFile = createSourceFile(
      'test.ts',
      text.toString(), // 轉成字串後丟進去以產生檔案，方便後續操作
      ScriptTarget.Latest
    );

    const classDeclaration = sourceFile.statements.find(node => isClassDeclaration(node))!;

    // 再往下找到 Decorator
    const decorator = classDeclaration.decorators![0];

    // 再往下找到 CallExpression
    const callExpression = decorator.expression as CallExpression;

    // 再往下找到 ObjectLiteralExpression
    const objectLiteralExpression = callExpression.arguments[0] as ObjectLiteralExpression;

    // 再往下找到 Identifier 為 declarations 的 PropertyAssignment
    const propertyAssignment = objectLiteralExpression.properties.find((property: PropertyAssignment) => {
      return (property.name as Identifier).escapedText === 'declarations'
    })! as PropertyAssignment;

    // 再往下找到 ArrayLiteralExpression
    const arrayLiteralExpression = propertyAssignment.initializer as ArrayLiteralExpression;


    const { elements } = arrayLiteralExpression;

    // 跟 Tree 說要更新哪個檔案
    const declarationRecorder = tree.beginUpdate(targetPath);
    let poi = Math.max(arrayLiteralExpression.end - 2, arrayLiteralExpression.pos + 2);
    let componentName = `Hello${componentFragmentName}Component`;
    let toInsert = componentName;
    if (elements.length) {
      const lastIdentifier = elements[elements.length - 1];
      const changeText = lastIdentifier.getFullText(sourceFile);
      poi = lastIdentifier.end;
      // 如果匹配到了换行符
      if (changeText.match(/^\r?\r?\n/)) {
        // 就把逗号和換行符號加到前面
        toInsert = `,${changeText.match(/^\r?\n\s*/)![0]}${componentName}`;
      } else {
        toInsert = `, ${componentName}`;
      }
    }






    //  在原本的 Identifier 結尾的地方加上 ', componentName' 的字
    declarationRecorder.insertLeft(poi, toInsert); // 可用 addDeclarationToModule


    // 先抓到所有的 ImportDeclaration
    const allImports = sourceFile.statements.filter( node => isImportDeclaration(node) );



    // 找到最後一個 ImportDeclaration
    let lastImport: Node | undefined;
    if (allImports.length) {
      for (const importNode of allImports) {
        if ( !lastImport || importNode.end > lastImport.end ) {
          lastImport = importNode;
        }
      }
    }


    // 準備好要插入的程式碼
    const importStr = `\nimport { ${componentName} } from './${options.name}/${fileName}';`;

    // 在最後一個 ImportDeclaration 結束的位置插入程式碼
    declarationRecorder.insertLeft(lastImport?.end || 0, importStr);

    // 把變更記錄提交給 Tree ， Tree 會自動幫我們變更
    tree.commitUpdate(declarationRecorder);



    // 重新讀取檔案並印出來看看
    // console.log(tree.read(targetPath)!.toString());

    return chain([
      mergeWith(templateSource, MergeStrategy.Overwrite) //  MergeStrategy.Overwrite
    ]);
  };
}


function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}
