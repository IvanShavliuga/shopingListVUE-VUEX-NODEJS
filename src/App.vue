<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tabList">
      <li class="nav-item"
        :class="index===0 ? 'active' : ''"
        v-for="(list, index) in shoppinglists"
        role="presentation"
        :key="index"
      >
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign">Add</i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div
        :class="index===0 ? 'active' : ''"
        v-for="(list, index) in shoppinglists"
        :key="index"
        class="tab-pane"
        role="tabpanel"
        :id="'a'+list.id"

      >
        <shopping-list-component :id="list.id" :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>

import ShoppingListComponent from "./components/ShoppingListComponent";
import ShoppingListTitleComponent from "./components/ShoppingListTitleComponent";
import _ from "underscore";
import store from "./vuex/store.js";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "app",
  components: { ShoppingListComponent, ShoppingListTitleComponent },
  computed: mapGetters({
    shoppinglists: "getLists"
  }),
  methods: _.extend(
    {},
    mapActions(["populateShoppingLists", "createShoppingList"]),
    {
      addShoppingList() {
        let list = { title: "new shopping list", items: [] };
        this.createShoppingList(list);
      }
    }
  ),
  store,
  mounted() {
    this.populateShoppingLists();
  }
};
</script>
