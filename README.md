本博客基于 [VitePress](https://vitepress.dev/) 构建，主题基于 [vitepress-theme-curve](https://github.com/imsyy/vitepress-theme-curve) 构建。

Preview: 👻 [無名小栈](https://blog.imsyy.top/)

Docs: 📖 [主题文档](https://blog.imsyy.top/pages/categories/%E4%B8%BB%E9%A2%98%E6%96%87%E6%A1%A3)

-------

### 主题配置

本主题提供了一个 `themeConfig.mjs` 文件用来配置，它位于 `.vitepress\theme\assets\themeConfig.mjs`，你可以将它复制一份并移动至根目录中，在这里里面的修改将会覆盖初始配置，请注意，**请不要更改文件名或者删除原配置文件，否则它将会不起作用！**

### 静态文件

通常情况下，静态文件处于根目录下的 `public` 文件夹中，通常用于存放字体或图片等文件信息。

了解更多：[资源处理](https://vitepress.dev/zh/guide/asset-handling#asset-handling)

### 部署

如果你之前使用过类似于 [Hexo](https://hexo.io/zh-cn/) 一样的静态站点生成器的话，那么这二者是极为相似的，都是构建为静态文件后上传至服务器以实现访问，当然，你也可以借助 GitHub 的 Actions 以实现自动部署，具体细节请参考我的博客，此处不再细说。

```bash
# 安装依赖
npm run install
# 构建
npm run build
```

建议使用 `pnpm`，若未安装，可使用 `npm install pnpm -g` 来安装。

```bash
pnpm install
pnpm build
```

通常在未修改配置文件的情况下，打包后的文件会处于根目录下的 `.vitepress\dist` 目录中，您可以将其中的文件上传至任意服务器以访问。

## 更多

更多信息请参考：[主题文档](https://blog.imsyy.top/pages/categories/%E4%B8%BB%E9%A2%98%E6%96%87%E6%A1%A3)

> Powered by VitePress

[![Netlify Status](https://api.netlify.com/api/v1/badges/31ebe949-6ce7-46b7-a5fb-a73da20412d6/deploy-status)](https://app.netlify.com/sites/imsyy-blog/deploys)
