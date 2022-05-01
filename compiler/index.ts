import {
  createPrinter,
  createProgram,
  EmitHint,
  factory,
  isVariableStatement,
  parseJsonSourceFileConfigFileContent,
  parseJsonText,
  sys,
  VariableStatement,
} from 'typescript';
import {readFileSync} from 'fs';
import {join} from 'path';

// const tsConfigPath = join(__dirname, '../projects/xm-docs/tsconfig.app.json');
const tsConfigPath = join(__dirname, '../tsconfig.node.json');
const tsConfigJsonContent = readFileSync(tsConfigPath).toString();
const jsonAst = parseJsonText(tsConfigPath, tsConfigJsonContent);
const tsConfig = parseJsonSourceFileConfigFileContent(jsonAst, sys, process.cwd());
// console.log('tsConfig', tsConfig.fileNames);

const program = createProgram({
  rootNames: tsConfig.fileNames,
  options: tsConfig.options
});
const targetFileAst = program.getSourceFile('compiler/test.ts');

const variableStatement = targetFileAst?.statements.filter(node => isVariableStatement(node))[0] as VariableStatement;
if (variableStatement) {
  let node = variableStatement.declarationList.declarations[0];
  if (node) {
    // 更新 Variable 类型的节点
    const newValue = factory.createNumericLiteral(12345);
    node = factory.updateVariableDeclaration(node, node.name, node.exclamationToken, node.type, newValue);
    const newNodeStr = createPrinter().printNode(EmitHint.Unspecified, node, targetFileAst!); // 打印node
    console.log('newNodeStr', newNodeStr);

    // const newFile = createPrinter().printFile(targetFileAst!);
    // console.log('newFile', newFile);
  }
}

const emitResult = program.emit();

