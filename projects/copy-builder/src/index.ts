import {BuilderContext, BuilderOutput, createBuilder, targetFromTargetString} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { promises as fs } from 'fs';

interface Options extends JsonObject {
  source: string;
  destination: string;
}

export default createBuilder(copyFileBuilder) as any;

async function copyFileBuilder(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {
  const targetPesc = targetFromTargetString((options.destination))
  console.log('targetPesc>>>>>>>', targetPesc);
  context.reportStatus('coping>>>>');
  try {
    await fs.copyFile(options.source, options.destination);
  } catch (err) {
    context.logger.error('Failed to copy file.');
    return {
      success: false,
      error: err.message,
    };
  }
  context.reportStatus('Done.');
  return { success: true };
}
