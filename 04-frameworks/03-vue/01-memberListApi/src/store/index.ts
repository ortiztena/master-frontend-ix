import { createStore } from "vuex";


export default createStore({
  state: {
    org: "lemoncode"
  },
  mutations: {
    UPDATE_ORG(state, org) {
      // this.state.org = org;
    }
  },
  actions: {},
  modules: {},
  getters: {
    org: (state) => state.org
  },
});

