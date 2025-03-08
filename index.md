---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "M.E.G.CN.人工智能雨竹"
  text: "快速，智能的QQ机器人"
  tagline: 基于LangBot框架和DeepSeek R1，力求达到最好的体验感
  actions:
    - theme: brand
      text: 安装雨竹
      link: ./install
    - theme: alt
      text: 源码仓库
      link: https://github.com/silencieuxzero/yuzhu
  image:
    src: /fbclogo.png
    alt: Fandom Backrooms Chinese Logo

features:
  - title: 🌈快速响应
    details: 使用DeepSeek R1，提高响应速度与准确率
  - title: 🏡拟人回答
    details: 使用插件进行了拟人化和分段回答
  - title: 📌后室化数据
    details: 内置智能工具，可以随时处理和Fandom后室或日常有关的信息（开发中）
  - title: 🌏长期维护
    details: 雨竹将长期维护，赞助Fandom后室中文即可加入内测群
---

<!--## 图片展示

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>-->

## 遇到问题？联系我们！

联系方式见网站导航栏

### 优秀的交流环境

你可以前往我们的 QQ 群聊以反馈。

### 想要赞助？

[点此进入爱发电](https://afdian.com/a/backrooms_fandom_cn)。

### 前往项目首页提 Issue
::: tip 雨竹是开源的，你可以前往开源首页提建议或者 bug。

赞助是我们继续的源泉！感谢您的支持！
:::
<script setup>
import { ElCarousel, ElCarouselItem, ElImage, ElImageViewer } from 'element-plus';

const previewSrcList = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
];
</script>
