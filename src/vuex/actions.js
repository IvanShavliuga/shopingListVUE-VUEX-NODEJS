import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from "./mutations_types";
import getters from "./getters";
import api from "../api";

export default {
  changeTitle: (store, data) => {
    store.commit(CHANGE_TITLE, data);
    store.dispatch("updateList", data.id);
  },
  populateShoppingLists: ({ commit }) => {
    api.fetchShoppingLists().then(response => {
      commit(POPULATE_SHOPPING_LISTS, response.data);
    });
  },
  updateList: (store, id) => {
    let shoppingList = getters.getListById(store.state, id);
    api.updateShoppingLists(shoppingList);
  },
  createShoppingList: (store, shoppinglist) => {
    api.addNewShoppingList(shoppinglist).then(() => {
      store.dispatch("populateShoppingLists");
    });
  },
  deleteShoppingList: (store, id) => {
    api.deleteShoppingLists(id).then(() => {
      store.dispatch("populateShoppingLists");
    });
  },
  createShoppingList: (store, shoppingList) => {
    api.addNewShoppingList(shoppingList).then(() => {
      store.dispatch("populateShoppingLists");
    });
  }
};
