import vue from "vue";
import vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
vue.use(vuex);

export const state = {
  shoppinglists: []
};

export default new vuex.Store({
  getters,
  mutations,
  actions,
  state
});
