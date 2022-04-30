import {Rule, SchematicContext, apply, template, Tree, url, mergeWith} from '@angular-devkit/schematics';


import { strings } from '@angular-devkit/core';

export function helloWorld(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    // 模板使用任何ejs语法
    const sourceTemplates = url('./files'); // 使用範本

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        addExclamation
      })
    ]);

    return mergeWith(sourceParametrizedTemplates);
  };
}



function addExclamation(value: string): string {
  return value + '!';
}
