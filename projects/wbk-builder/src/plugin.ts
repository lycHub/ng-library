import * as webpack from "webpack";
import { Configuration } from "webpack";

import { postcssConfig } from './config';

export function plugin() {
  return {
    webpackConfiguration: async (webpackConfig: Configuration) => {
      if (webpackConfig.module?.rules?.length) {
        // @ts-ignore
        webpackConfig.module.rules.push(postcssConfig);
      }
      return webpackConfig;
    },
    indexHtml: async (content: string) => {
      return content;
    },
  };
}
