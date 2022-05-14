const postcssConfig = {
  test: /\.css$/,
  // enforce: 'pre',
  use: [
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: {
            autoprefixer: {},
            tailwindcss: {},
            'tailwindcss/nesting': {}
          }
        },
      },
    },
  ],
}
const customWebpackConfig = {
  module: {
    rules: [
      postcssConfig
    ],
  },
};
export { customWebpackConfig, postcssConfig };
