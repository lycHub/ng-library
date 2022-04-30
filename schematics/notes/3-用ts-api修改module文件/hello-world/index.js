"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const typescript_1 = require("typescript");
const workspace_1 = require("@schematics/angular/utility/workspace");
function helloWorld(options) {
    return async (tree, _context) => {
        // const host = createHost(tree);
        // const { workspace } = await workspaces.readWorkspace('/', host);
        const workspace = await (0, workspace_1.getWorkspace)(tree);
        if (!options.project && typeof workspace.extensions.defaultProject === 'string') {
            options.project = workspace.extensions.defaultProject;
        }
        const project = (options.project != null) ? workspace.projects.get(options.project) : null;
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name: ${options.project}`);
        }
        // ${project.extensions.projectType}
        if (!options.path) {
            options.path = `${project.sourceRoot}/app/${options.name}`;
        }
        // console.log('options>>>', options);
        const componentFragmentName = core_1.strings.classify(options.name);
        const fileName = `hello-${options.name}.component`;
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)({
                ...options,
                selectorName: core_1.strings.dasherize(options.name),
                componentFragmentName
            }),
            (0, schematics_1.move)((0, core_1.normalize)(options.path)),
            (0, schematics_1.forEach)((fileEntry) => {
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
        const sourceFile = (0, typescript_1.createSourceFile)('test.ts', text.toString(), // 轉成字串後丟進去以產生檔案，方便後續操作
        typescript_1.ScriptTarget.Latest);
        const classDeclaration = sourceFile.statements.find(node => (0, typescript_1.isClassDeclaration)(node));
        // 再往下找到 Decorator
        const decorator = classDeclaration.decorators[0];
        // 再往下找到 CallExpression
        const callExpression = decorator.expression;
        // 再往下找到 ObjectLiteralExpression
        const objectLiteralExpression = callExpression.arguments[0];
        // 再往下找到 Identifier 為 declarations 的 PropertyAssignment
        const propertyAssignment = objectLiteralExpression.properties.find((property) => {
            return property.name.escapedText === 'declarations';
        });
        // 再往下找到 ArrayLiteralExpression
        const arrayLiteralExpression = propertyAssignment.initializer;
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
                toInsert = `,${changeText.match(/^\r?\n\s*/)[0]}${componentName}`;
            }
            else {
                toInsert = `, ${componentName}`;
            }
        }
        //  在原本的 Identifier 結尾的地方加上 ', componentName' 的字
        declarationRecorder.insertLeft(poi, toInsert);
        // 把變更記錄提交給 Tree ， Tree 會自動幫我們變更
        // tree.commitUpdate(declarationRecorder);
        // 先抓到所有的 ImportDeclaration
        const allImports = sourceFile.statements.filter(node => (0, typescript_1.isImportDeclaration)(node));
        // 找到最後一個 ImportDeclaration
        let lastImport;
        if (allImports.length) {
            for (const importNode of allImports) {
                if (!lastImport || importNode.end > lastImport.end) {
                    lastImport = importNode;
                }
            }
        }
        // 準備好要插入的程式碼
        const importStr = `\nimport { ${componentName} } from './${options.name}/${fileName}';`;
        // 在最後一個 ImportDeclaration 結束的位置插入程式碼
        declarationRecorder.insertLeft(lastImport?.end || 0, importStr);
        tree.commitUpdate(declarationRecorder);
        // 重新讀取檔案並印出來看看
        // console.log(tree.read(targetPath)!.toString());
        return (0, schematics_1.chain)([
            (0, schematics_1.mergeWith)(templateSource, schematics_1.MergeStrategy.Overwrite) //  MergeStrategy.Overwrite
        ]);
    };
}
exports.helloWorld = helloWorld;
function createHost(tree) {
    return {
        async readFile(path) {
            const data = tree.read(path);
            if (!data) {
                throw new schematics_1.SchematicsException('File not found.');
            }
            return core_1.virtualFs.fileBufferToString(data);
        },
        async writeFile(path, data) {
            return tree.overwrite(path, data);
        },
        async isDirectory(path) {
            return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
        },
        async isFile(path) {
            return tree.exists(path);
        },
    };
}
