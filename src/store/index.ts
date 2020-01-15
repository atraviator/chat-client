import Vue from "vue";
import Vuex from "vuex";
import UserModule from "./user-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { username: UserModule }
});
