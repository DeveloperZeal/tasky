import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundPageView from "@/views/NotFoundPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found-page",
      component: NotFoundPageView,
    },
  ],
});

export default router;
