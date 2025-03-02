import { defineConfig } from "vitepress";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "M.E.G.CN.数据库",
  description:
    "Fandom后室中文人工智能雨竹",
  head: [
    ["link", { rel: "icon", href: "/fbclogo.jpg", type: "image/png" }],
    ["meta", { name: "darkreader-lock" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "使用指南", link: "/install/", activeMatch: "^/install/" },
      {
        text: "特色功能",
        link: "/apps/fast-answer/",
        activeMatch: "^/apps/",
      },
      {
        text: "更新日志",
        link: "/news/update-preview",
        activeMatch: "^/news/",
      },
      {
        text: "项目团队",
        link: "/team/",
        activeMatch: "^/team/",
      },
    ],

    sidebar: [
      {
        text: "使用指南",
        items: [
          { text: "快速开始", link: "/install/" },
          { text: "FAQ", link: "/install/faq" },
        ],
      },
      {
        text: "更好的bot",
        items: [
          { text: "快速响应", link: "/apps/fast-answer/" },
          { text: "后室化回答", link: "/apps/backrooms-answer/" },
        ],
      },
      {
        text: "更新日志",
        items: [
          { text: "雨竹bot：预览版", link: "/news/update-preview" },
        ],
      },
      {
        text: "版本预览",
        items: [
          { text: "雨竹bot：测试版0.1", link: "/news/beta0.1" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1726642385584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="1454"></path></svg>',
        },
        link: "https://gitee.com/silencieuxzero/yuzhu",
      },
      { icon: "github", link: "https://github.com/silencieuxzero/yuzhusite" },
      {
        icon: {
          svg: '<svg t="1726643547175" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3504" width="200" height="200"><path d="M512 1024C229.226667 1024 0 794.773333 0 512 0 229.226667 229.226667 0 512 0 794.773333 0 1024 229.226667 1024 512 1024 794.773333 794.773333 1024 512 1024ZM693.333333 458.666667C689.024 438.634667 682.666667 426.666667 682.666667 426.666667 682.666667 426.666667 682.944 397.333333 650.666667 330.666667 618.389333 264 522.666667 256 522.666667 256L512 256C512 256 416.277333 264 384 330.666667 351.722667 397.333333 352 426.666667 352 426.666667 352 426.666667 345.642667 438.634667 341.333333 458.666667 337.024 478.698667 341.333333 490.666667 341.333333 490.666667 341.333333 490.666667 286.656 546.421333 288 586.666667 289.344 626.912 299.221333 652.544 320 629.333333 340.778667 606.122667 341.333333 608 341.333333 608 341.333333 608 340.970667 625.333333 352 640 363.029333 654.666667 373.333333 661.333333 373.333333 661.333333 373.333333 661.333333 317.386667 689.034667 330.666667 725.333333 343.946667 761.632 384.874667 768.288 416 768 447.125333 767.712 512 746.666667 512 746.666667L522.666667 746.666667C522.666667 746.666667 587.541333 767.712 618.666667 768 649.792 768.288 690.72 761.632 704 725.333333 717.28 689.034667 661.333333 661.333333 661.333333 661.333333 661.333333 661.333333 671.637333 654.666667 682.666667 640 693.696 625.333333 693.333333 608 693.333333 608 693.333333 608 693.888 606.122667 714.666667 629.333333 735.445333 652.544 745.322667 626.912 746.666667 586.666667 748.010667 546.421333 693.333333 490.666667 693.333333 490.666667 693.333333 490.666667 697.642667 478.698667 693.333333 458.666667Z" p-id="3505"></path></svg>',
        },
        link: "/QQ.jpg",
      },
    ],

    footer: {
      message:
        "感谢GXDE的开源宣传页面，本文档基于GXDE的开源宣传页面修改而来，网页框架使用VitePress",
      copyright:
        "这里应该有一段文字",
    },

    logo: "/logo.png",
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        lastUpdatedText: "上次更新",
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        darkModeSwitchLabel: "主题",
        outlineTitle: "大纲",
        sidebarMenuLabel: "目录",
        returnToTopLabel: "返回顶部",
      },
    },
    en: {
      label: "English",
      lang: "en",

      title: "M.E.G.CN.数据库",
      description:
        "this is yuzhu",

      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Getting Started",
            link: "/en/install/",
            activeMatch: "^/en/install/",
          },
        ],
        sidebar: [
          {
            text: "Getting Started",
            items: [
              { text: "Quick Start", link: "/en/install/" },
              { text: "FAQ", link: "/en/install/faq" },
            ],
          },
          {
            text: "Feature Programs",
            items: [
              { text: "fast answer", link: "/en/apps/fast-answer/" },
              { text: "backrooms answer", link: "/en/apps/backrooms-answer/" },
            ],
          },
          {
            text: "Update Log",
            items: [
              { text: "Preview", link: "/en/news/preview" },
            ],
          },
        ],
      },
    },
  },

  lastUpdated: true,
  cleanUrls: true,

  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
