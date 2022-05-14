import {
  BuilderContext,
  createBuilder,
  targetFromTargetString,
} from "@angular-devkit/architect";
import {
  ServerBuilderOptions,
  executeServerBuilder,
} from "@angular-devkit/build-angular";
import { plugin } from "./plugin";

export const buildWithPlugin = (
  options: ServerBuilderOptions,
  context: BuilderContext
): ReturnType<typeof executeServerBuilder> => {
  // console.log('dev options>>>>', options); // xm-docs:wbk-builder:development, 即使运行的是wbk-builder-dev
  // const browserTarget = targetFromTargetString(options.browserTarget); // string 格式化成对象
  // @ts-ignore
  return executeServerBuilder(options, context, plugin());
};

export default createBuilder<ServerBuilderOptions>(buildWithPlugin);
