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
        link: "/ch00/foreword.md",
        children: [
          {
            text: "Foreword to SICP, 1984",
            link: "/ch00/foreword-sicp-1984.md"
          }
        ]
      },
      {
        text: "1. 利用函数构造抽象",
        link: "/ch01/0.abstraction-with-functions.md",
        children: [
          {
            text: "1.1 编程的元素",
            link: "/ch01/1.elements-of-programming.md"
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
