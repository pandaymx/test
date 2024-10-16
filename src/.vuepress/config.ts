import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { prismjs } from "vuepress-theme-hope";
import { isLinkExternal } from "vuepress/shared";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  theme,
  plugins: [
    prismjs({
      themes: {
        light: "material-light",
        dark: "one-dark",
      }
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
