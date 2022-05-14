import { writeFileSync } from "fs";
import * as webpack from "webpack";
import { Configuration } from "webpack";
import { mergeWithRules } from "webpack-merge";
import { postcssConfig, customWebpackConfig } from './config';

export function plugin() {
  return {
    webpackConfiguration: async (webpackConfig: Configuration) => {
      /*if (webpackConfig.module?.rules?.length) {
        // @ts-ignore
        webpackConfig.module.rules.push(postcssConfig);
      }*/
      const result = mergeWithRules({
          module: {
            rules: {
              test: "match",
              use: {
                loader: "match",
                options: "merge",
              },
            },
          },
        })(webpackConfig, customWebpackConfig);
      writeFileSync('./webpack.config.postcss.json', JSON.stringify(result, null, 2));
      return result;
    },
    indexHtml: async (content: string) => {
      return content;
    },
  };
}
