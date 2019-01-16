import vue from "vue";
import vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
vue.use(vuex);

export const state = {
  shoppinglists: [
    {
      id: "groceries",
      title: "Groceries",
      items: [
        {
          text: "bananas",
          checked: true
        },
        {
          text: "apples",
          checked: false
        }
      ]
    },
    {
      id: "clothes",
      title: "Clothes",
      items: [
        { text: "black_dress", checked: false },
        { text: "all-stars", checked: false }
      ]
    }
  ]
};

export default new vuex.Store({
  getters,
  mutations,
  actions,
  state
});
