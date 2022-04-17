import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/sicp-js/",
  lang: "en-US",
  title: "SICP JavaScript Version",
  description: "Translation of SICP JavaScript Version",
  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    // logo: "https://vuejs.org/images/logo.png",
    navbar: [
      {
        text: "GitHub",
        link: "https://github.com/icyfish/sicp-js"
      }
    ],
    sidebar: [
      {
        text: "0. 前言",
        link: "/ch00/forward.md",
        children: [
          {
            text: "Foreword to SICP, 1984",
            link: "/ch00/foreword-sicp-1984.md"
          }
        ]
      }
    ]
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索"
          }
        }
      }
    ]
  ]
});
