import {
  apply,
  chain,
  FileEntry,
  forEach,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import {normalize, strings, virtualFs, workspaces} from '@angular-devkit/core';

import {
  ArrayLiteralExpression,
  CallExpression,
  createSourceFile,
  Identifier,
  isClassDeclaration,
  isImportDeclaration,
  Node,
  ObjectLiteralExpression,
  PropertyAssignment,
  ScriptTarget
} from 'typescript';

import {getWorkspace} from '@schematics/angular/utility/workspace';

import {findModuleFromOptions, buildRelativePath} from '@schematics/angular/utility/find-module';
import { addDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { HelloWorldSchema } from '../types';

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
    const path = normalize(options.path);
    const templateSource = apply(url('./files'), [
      template({
        ...options,
        selectorName: strings.dasherize(options.name),
        componentFragmentName
      }),
      move(path), // 输出目录
      forEach((fileEntry: FileEntry) => { // ??
        if (tree.exists(fileEntry.path)) {
          // tree.overwrite(fileEntry.path, fileEntry.content);
          tree.rename(fileEntry.path, fileEntry.path.replace('.tpl', ''));
        }
        return fileEntry;
      })
    ]);


    // 根据projectName 找到跟模块路径
    const projectModulePath = findModuleFromOptions(tree, options) || project.sourceRoot + '/app/app.module.ts';
    const moduleContent = tree.read(projectModulePath) || [];
    const sourceFile = createSourceFile(
      'test.ts',
      moduleContent.toString(), // 轉成字串後丟進去以產生檔案，方便後續操作
      ScriptTarget.Latest,
      true // 设置parentNode, addDeclarationToModule必须要有
    );


    const componentPath = `/${path}/${fileName}`;

    let componentName = `Hello${componentFragmentName}Component`;

    // 用 buildRelativePath 取得 import 路徑
    const relativePath = buildRelativePath(projectModulePath, componentPath); // ./madao/hello-madao.component

    // @ts-ignore // 將 最近的module.ts 的程式碼讀取出來
    const declarationChanges = addDeclarationToModule(sourceFile, targetModulePath, componentName, relativePath);

    // console.log('declarationChanges>>>', declarationChanges);

    const declarationRecorder = tree.beginUpdate(projectModulePath);
    for (const change of declarationChanges) {
      if (change instanceof InsertChange) {
        declarationRecorder.insertLeft(change.pos, change.toAdd);
      }
    }
    tree.commitUpdate(declarationRecorder);

    // 重新讀取檔案並印出來看看
    // console.log(tree.read(targetModulePath)!.toString());

    return chain([
      mergeWith(templateSource) //  MergeStrategy.Overwrite
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
