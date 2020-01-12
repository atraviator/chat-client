import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import Login from "@/views/login";
import Chat from "@/views/chat";

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
      component: Chat
    }
  ]
};

const router = new VueRouter(routerOptions);

export default router;
