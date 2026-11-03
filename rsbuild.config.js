import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { ImageMinimizerPlugin } from "@rsbuild/plugin-image-compress";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

const purge = purgeCSSPlugin({
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  safelist: {
    standard: ['dark'],
  },
});

const web = {
  source: {
    entry: {
      index: './src/index.jsx',
    }
  },
  html: {
    template: './public/index.html'
  },
  output: {
    target: 'web',
    distPath: { root: "build" },
    inlineStyles: true,
  },
  performance: {
    preload: {
      type: 'all-assets',
      include: [/\.woff2$/],
    },
  },
  tools: {
    postcss: (config, { addPlugins }) => {
      if (process.env.NODE_ENV === 'production' && process.env.PURGE !== 'off') addPlugins(purge);
    },
  },
};

const server = {
  source: {
    entry: {
      server: './src/entry-server.jsx',
    }
  },
  output: {
    target: 'node',
    distPath: { root: "build-server" },
    filename: { js: '[name].cjs' },
    emitAssets: false,
    copy: [],
  },
};

export default defineConfig(({ command }) => ({
  plugins: [pluginReact(), pluginSass()],
  environments: command === 'build' ? { web, server } : { web },
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
}));
