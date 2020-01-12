import Vue from "vue";
import App from "./components/_app";
import router from "./router";
import store from "./store";
import "@/assets/reset.css";
import "@/assets/colours.css";
import "@/assets/layout.css";
import "@/assets/typeography.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
