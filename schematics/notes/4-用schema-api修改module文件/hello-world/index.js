"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const typescript_1 = require("typescript");
const workspace_1 = require("@schematics/angular/utility/workspace");
const find_module_1 = require("@schematics/angular/utility/find-module");
const schematics_2 = require("@angular/cdk/schematics");
const change_1 = require("@schematics/angular/utility/change");
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
        const path = (0, core_1.normalize)(options.path);
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)({
                ...options,
                selectorName: core_1.strings.dasherize(options.name),
                componentFragmentName
            }),
            (0, schematics_1.move)(path),
            (0, schematics_1.forEach)((fileEntry) => {
                if (tree.exists(fileEntry.path)) {
                    // tree.overwrite(fileEntry.path, fileEntry.content);
                    tree.rename(fileEntry.path, fileEntry.path.replace('.tpl', ''));
                }
                return fileEntry;
            })
        ]);
        // 將 最近的module.ts 的程式碼讀取出來
        const targetModulePath = (0, find_module_1.findModuleFromOptions)(tree, options) || project.sourceRoot + '/app/app.module.ts';
        const moduleContent = tree.read(targetModulePath) || [];
        const sourceFile = (0, typescript_1.createSourceFile)('test.ts', moduleContent.toString(), // 轉成字串後丟進去以產生檔案，方便後續操作
        typescript_1.ScriptTarget.Latest, true // 设置parentNode, addDeclarationToModule必须要有
        );
        const componentPath = `/${path}/${fileName}`;
        let componentName = `Hello${componentFragmentName}Component`;
        // 用 buildRelativePath 取得 import 路徑
        const relativePath = (0, find_module_1.buildRelativePath)(targetModulePath, componentPath); // ./madao/hello-madao.component
        // @ts-ignore
        const declarationChanges = (0, schematics_2.addDeclarationToModule)(sourceFile, targetModulePath, componentName, relativePath);
        // console.log('declarationChanges>>>', declarationChanges);
        const declarationRecorder = tree.beginUpdate(targetModulePath);
        for (const change of declarationChanges) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        tree.commitUpdate(declarationRecorder);
        // 重新讀取檔案並印出來看看
        console.log(tree.read(targetModulePath).toString());
        return (0, schematics_1.chain)([
            (0, schematics_1.mergeWith)(templateSource) //  MergeStrategy.Overwrite
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
