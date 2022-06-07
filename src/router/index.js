import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //el path /home nos lleva a home
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      //el path vacio nos lleva a home por default
      path: "/",
      redirect: "home",
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/tutorials",
      name: "tutorials",
      component: () => import("../learning/pages/tutorial-list.component.vue"),
    },
  ],
});

export default router;
