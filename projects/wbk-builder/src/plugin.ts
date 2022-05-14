import * as webpack from "webpack";
import { Configuration } from "webpack";
import {
  writeFileSync
} from "fs";

export function plugin(mode = 'prod') {
  return {
    webpackConfiguration: async (webpackConfig: Configuration) => {
      return webpackConfig;
    },
    indexHtml: async (content: string) => {
      return content;
    },
  };
}
