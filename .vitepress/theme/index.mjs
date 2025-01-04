import { h } from "vue";
import { createPinia } from "pinia";
import { routeChange } from "@/utils/initTools.mjs";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import LazyLoader from "@/components/LazyLoader.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import NotFound from "@/views/NotFound.vue";
// 根组件
import App from "@/App.vue";
// 全局样式
import "@/style/main.scss";

// pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// InstantSearch
import InstantSearch from "vue-instantsearch/vue3/es";

// Theme
const Theme = {
  // extends: Theme,
  NotFound: () => {
    return h(NotFound);
  },
  Layout: () => {
    return h(App);
  },
  enhanceApp({ app, router, siteData }) {
    // 挂载
    app.use(pinia);
    app.use(InstantSearch);
    app.component("LazyLoader", LazyLoader);
    // 插件
    enhanceAppWithTabs(app);
    // 路由守卫
    router.onBeforeRouteChange = (to) => {
      routeChange("before", to);
    };
    router.onAfterRouteChanged = (to) => {
      routeChange("after", to);
    };
  },
};

export default Theme;
