"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const typescript_1 = require("typescript");
const change_1 = require("@schematics/angular/utility/change");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const schematics_2 = require("@angular/cdk/schematics");
function default_1(options) {
    return async (tree, context) => {
        const workspace = await (0, workspace_1.getWorkspace)(tree);
        if (!options.project && typeof workspace.extensions.defaultProject === 'string') {
            options.project = workspace.extensions.defaultProject;
        }
        const project = options.project ? workspace.projects.get(options.project) : null;
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name: ${options.project}`);
        }
        if (!options.path) {
            options.path = `${project.sourceRoot}/app`;
        }
        // console.log('project>>>', project.sourceRoot, project.extensions);
        const projectModulePath = await (0, schematics_2.findModuleFromOptions)(tree, options) || options.path + '/app.module.ts';
        const sourceFile = readIntoSourceFile(tree, projectModulePath);
        const importPath = '@fortawesome/angular-fontawesome';
        const moduleName = 'FontAwesomeModule';
        /*
        * 把FontAwesomeModule引入app.module
        * */
        // @ts-ignore
        const declarationChanges = (0, schematics_2.addImportToModule)(sourceFile, projectModulePath, moduleName, importPath);
        const declarationRecorder = tree.beginUpdate(projectModulePath);
        for (const change of declarationChanges) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        tree.commitUpdate(declarationRecorder);
        /*
        * app.component.ts里加条import语句
        * */
        const appComponentPath = `${options.path}/app.component.ts`;
        const componentSourceFile = readIntoSourceFile(tree, appComponentPath);
        // 取得所有的 ImpotDeclaration
        const allImports = componentSourceFile.statements.filter(node => (0, typescript_1.isImportDeclaration)(node));
        // 找到最後一個 ImportDeclaration
        let lastImport;
        if (allImports.length) {
            for (const importNode of allImports) {
                if (!lastImport || importNode.end > lastImport.end) {
                    lastImport = importNode;
                }
            }
        }
        const importFaCoffee = '\nimport { faCoffee } from \'@fortawesome/free-solid-svg-icons\';';
        // 將 importFaCoffee 字串插入到最後一個 ImpotDeclaration 的後面
        const componentRecorder = tree.beginUpdate(appComponentPath);
        componentRecorder.insertLeft(lastImport?.end || 0, importFaCoffee);
        /*
       * app.component.ts里加个属性： faCoffee = faCoffee;
       * */
        // 找到 ClassDeclaration
        const classDeclaration = componentSourceFile.statements.find(node => (0, typescript_1.isClassDeclaration)(node));
        if (classDeclaration) {
            // 取得所有的 property
            const allProperties = classDeclaration.members.filter(node => (0, typescript_1.isPropertyDeclaration)(node));
            // 取得最後一個 propery
            let lastProperty;
            if (allProperties.length) {
                for (const propNode of allProperties) {
                    if (!lastProperty || propNode.end > lastProperty.end) {
                        lastProperty = propNode;
                    }
                }
            }
            // 組合欲插入的程式碼字串
            const faCoffeeProperty = 'faCoffee = faCoffee;';
            const changeText = lastProperty ? lastProperty.getFullText() : '';
            let toInsert = '';
            if (changeText.match(/^\r?\r?\n/)) {
                toInsert = `${changeText.match(/^\r?\n\s*/)[0]}${faCoffeeProperty}`;
            }
            else {
                toInsert = `\n  ${faCoffeeProperty}\n`;
            }
            // 插入字串
            if (lastProperty) {
                componentRecorder.insertLeft(lastProperty?.end || 0, toInsert);
            }
            else {
                componentRecorder.insertLeft(classDeclaration.end - 1, toInsert);
            }
        }
        /*
        * app.component.html 裡加上 <fa-icon [icon]="faCoffee" />
        * const htmlPath = `${options.path}/app.component.html`;
          const htmlStr = `\n<fa-icon [icon]="faCoffee" />\n`;
          const htmlSourceFile = readIntoSourceFile(tree, htmlPath);
          const htmlRecorder = tree.beginUpdate(htmlPath);
          htmlRecorder.insertLeft(htmlSourceFile.end, htmlStr);
          tree.commitUpdate(htmlRecorder);
        * */
        /*
        * app.component.ts 裡加上 <fa-icon [icon]="faCoffee" />
        * */
        // @ts-ignore
        const tplNode = classDeclaration.decorators[0].expression.arguments[0].properties.find(node => (0, typescript_1.isNoSubstitutionTemplateLiteral)((node.initializer)));
        const htmlStr = `\n<fa-icon [icon]="faCoffee" />\n`;
        componentRecorder.insertLeft(tplNode.end, htmlStr); // 注意反引号位置
        tree.commitUpdate(componentRecorder);
        // 重新讀取檔案並印出來看看
        // console.log(tree.read(appComponentPath)!.toString());
        /*
        * 安装依赖
        * */
        const dependencies = [
            { name: '@fortawesome/fontawesome-svg-core', version: '~1.2.25' },
            { name: '@fortawesome/free-solid-svg-icons', version: '~5.11.2' },
            { name: '@fortawesome/angular-fontawesome', version: '~0.5.0' }
        ];
        dependencies.forEach(dependency => {
            addPackageToPackageJson(tree, dependency.name, dependency.version);
        });
        // console.log(readIntoSourceFile(tree, 'package.json').text);
        context.addTask(new tasks_1.NodePackageInstallTask({
            packageName: dependencies.map(d => d.name).join(' ')
        }));
        return (0, schematics_1.chain)([]);
    };
}
exports.default = default_1;
function readIntoSourceFile(tree, filePath) {
    const moduleContent = tree.read(filePath) || [];
    return (0, typescript_1.createSourceFile)('test.ts', moduleContent.toString(), // 轉成字串後丟進去以產生檔案，方便後續操作
    typescript_1.ScriptTarget.Latest, true // 设置parentNode, addDeclarationToModule必须要有
    );
}
function addPackageToPackageJson(tree, pkg, version) {
    if (tree.exists('package.json')) {
        const sourceText = tree.read('package.json').toString('utf-8');
        const json = JSON.parse(sourceText);
        if (!json.dependencies) {
            json.dependencies = {};
        }
        if (!json.dependencies[pkg]) {
            json.dependencies[pkg] = version;
            json.dependencies = sortObjectByKeys(json.dependencies);
        }
        tree.overwrite('package.json', JSON.stringify(json, null, 2));
    }
    return tree;
}
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
}
