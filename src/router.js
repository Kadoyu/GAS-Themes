import Vue from "vue";
import VueRouter from "vue-router";

import About from "@/components/About";
import Settings from "@/components/Settings";
import Themes from "@/components/Themes";

Vue.use(VueRouter);

const routes = [
  { path: "/themes", redirect: "/" },
  { name: "Themes", path: "/", component: Themes },
  { name: "Settings", path: "/settings", component: Settings },
  { name: "About", path: "/about", component: About },
];

export default new VueRouter({
  mode: "hash",
  routes: routes,
});
