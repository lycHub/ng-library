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
  chain
} from '@angular-devkit/schematics';
import {normalize, strings, virtualFs, workspaces} from '@angular-devkit/core';

export interface HelloWorldSchema {
  name: string;
  project: string;
  path: string;
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


export function helloWorld(options: HelloWorldSchema): Rule {
  return async (tree: Tree, _context: SchematicContext) => {

    const host = createHost(tree);
    const { workspace } = await workspaces.readWorkspace('/', host);


    if (!options.project && typeof workspace.extensions.defaultProject === 'string') {
      options.project = workspace.extensions.defaultProject;
    }

    const project = (options.project != null) ? workspace.projects.get(options.project) : null;

    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    if (!options.path) {
      options.path = `${project.sourceRoot}/${project.extensions.projectType}`;
    }

    const templateSource = apply(url('./files'), [
      template({
        ...options,
        ...strings
      }),
      move(normalize(options.path)) // 输出目录
    ]);

    // return mergeWith(templateSource);
    return chain([
      mergeWith(templateSource)
    ]);
  };
}
