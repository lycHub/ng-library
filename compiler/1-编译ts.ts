import {
  parseJsonText,
  parseJsonSourceFileConfigFileContent,
  sys, createProgram,
} from 'typescript';
import { readFileSync } from 'fs';
import { join } from 'path';

const tsConfigPath = join(__dirname, '../projects/xm-docs/tsconfig.app.json');
const tsConfigJsonContent = readFileSync(tsConfigPath).toString();
const jsonAst = parseJsonText(tsConfigPath, tsConfigJsonContent);
const tsConfig = parseJsonSourceFileConfigFileContent(jsonAst, sys, process.cwd());
// console.log('tsConfig', tsConfig.fileNames);

const program = createProgram({
  rootNames: tsConfig.fileNames,
  options: tsConfig.options
});
const emitResult = program.emit();
console.log('emitResult>>', emitResult);
