import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/homepage/home.vue";
// import comingSoon from "../pages/homepage/coming-soon.vue";
import about from "../pages/about.vue";
import artworks from "../pages/artworks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/artworks",
    name: "artworks",
    component: artworks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
