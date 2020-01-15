import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import Login from "@/views/login";
import Chat from "@/views/chat";
import Store from "../store";

Vue.use(VueRouter);

const routerOptions: RouterOptions = {
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
      beforeEnter: (to, from, next) => {
        next();
      }
    }
  ]
};

const router = new VueRouter(routerOptions);

export default router;
