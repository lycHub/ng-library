"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
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
function helloWorld(options) {
    return async (tree, _context) => {
        const host = createHost(tree);
        const { workspace } = await core_1.workspaces.readWorkspace('/', host);
        if (!options.project && typeof workspace.extensions.defaultProject === 'string') {
            options.project = workspace.extensions.defaultProject;
        }
        const project = (options.project != null) ? workspace.projects.get(options.project) : null;
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name: ${options.project}`);
        }
        if (!options.path) {
            options.path = `${project.sourceRoot}/${project.extensions.projectType}`;
        }
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)({
                ...options,
                ...core_1.strings
            }),
            (0, schematics_1.move)((0, core_1.normalize)(options.path)) // 输出目录
        ]);
        // return mergeWith(templateSource);
        return (0, schematics_1.chain)([
            (0, schematics_1.mergeWith)(templateSource)
        ]);
    };
}
exports.helloWorld = helloWorld;
