import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/homepage/home.vue";
import comingSoon from "../pages/homepage/coming-soon.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
