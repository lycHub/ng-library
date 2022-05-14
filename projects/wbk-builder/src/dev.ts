import {
  BuilderContext,
  createBuilder,
  targetFromTargetString,
} from "@angular-devkit/architect";
import {
  DevServerBuilderOptions,
  executeDevServerBuilder,
} from "@angular-devkit/build-angular";
import { DevServerBuilderOutput } from "@angular-devkit/build-angular";
import { Observable, from } from "rxjs";
import { switchMap } from "rxjs/operators";
import { plugin } from "./plugin";

export const buildWithPlugin = (
  options: DevServerBuilderOptions,
  context: BuilderContext
): Observable<DevServerBuilderOutput> => {
  console.log('dev options>>>>', options.browserTarget); // xm-docs:wbk-builder:development, 即使运行的是wbk-builder-dev
  const browserTarget = targetFromTargetString(options.browserTarget); // string 格式化成对象

  async function setup() {
    return await context.getTargetOptions(
      browserTarget
    ) as unknown as DevServerBuilderOptions;

  }

  return from(setup()).pipe(
    switchMap((_options) => {
      // console.log('_options>>', _options);
      // @ts-ignore
      return executeDevServerBuilder(options, context, plugin());
    })
  );
};

export default createBuilder<DevServerBuilderOptions>(buildWithPlugin);
