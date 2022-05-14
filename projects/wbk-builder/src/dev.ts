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
  const browserTarget = targetFromTargetString(options.browserTarget);
  console.log('dev browserTarget>>>>', browserTarget);

  async function setup() {
    const options = context.getTargetOptions(
      browserTarget
    ) as unknown as DevServerBuilderOptions;
    return options;
  }

  return from(setup()).pipe(
    switchMap((_options) => {
      // @ts-ignore
      return executeDevServerBuilder(options, context, plugin('dev'));
    })
  );
};

export default createBuilder<DevServerBuilderOptions>(buildWithPlugin);
