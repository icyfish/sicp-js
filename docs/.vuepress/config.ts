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
        link: "/ch01/1.abstraction-with-functions.md",
        children: [
          {
            text: "1.1 编程的元素",
            link: "/ch01/1.1.elements-of-programming.md",
            children: [
              {
                text: "1.1.1 表达式",
                link: "/ch01/1.1.1.expressions.md"
              },
              {
                text: "1.1.2 命名与环境",
                link: "/ch01/1.1.2.naming-and-environment.md"
              },
              {
                text: "1.1.3 计算运算符组合",
                link: "/ch01/1.1.3.evaluating-operator-combinations.md"
              },
              {
                text: "1.1.4 复合函数",
                link: "/ch01/1.1.4.compound-functions"
              },
              {
                text: "1.1.5 函数调用的替代模型",
                link: "/ch01/1.1.5.substitution-model"
              },
              {
                text: '1.1.6 条件表达式和断言',
                link: '/ch01/1.1.6.conditional-expressions-predicates'
              },
              {
                text: '1.1.7 示例: 牛顿法实现平方根',
                link: '/ch01/1.1.7.square-roots'
              }
              
            ]
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
