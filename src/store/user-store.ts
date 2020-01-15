import { Module } from "vuex";

interface IUserState {
  username: string;
}

const UserModule: Module<IUserState, any> = {
  namespaced: true,
  state: {
    username: ""
  },

  getters: {},

  mutations: {}
};

export default UserModule;
