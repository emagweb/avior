import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { ImageMinimizerPlugin } from "@rsbuild/plugin-image-compress";

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    entry: {
      index: './src/index.jsx',
    }
  },
  html: {
    template: './public/index.html'
  },
  tools: {
    rspack: {
      optimization: {
        minimizer: [
          '...',
          new ImageMinimizerPlugin({
            use: 'jpeg',
            test: /\.(?:jpg|jpeg)$/
          }),
          new ImageMinimizerPlugin({
            use: 'png',
            test: /\.png$/
          }),
          new ImageMinimizerPlugin({
            use: 'avif',
            test: /\.avif$/
          }),
          new ImageMinimizerPlugin({
            use: 'ico',
            test: /\.(?:ico|icon)$/,
          }),
        ],
      },
    },
  },
  output: {
    distPath: { root: "build" },
  }
});