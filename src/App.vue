<template>
  <div id="app" class="container-fluid my-0">
    <ul class="nav nav-tabs" role="tablist">
      <li
        :class="index===0 ? 'active':''"
        v-for="(list,index) in shoppinglists"
        :key="list.id"
        role="presentation"
      >
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
    </ul>
    <div class="tab-content">
      <div
        :class="index===0 ?'active':''"
        v-for="(list,index) in shoppinglists"
        :key="list.id"
        class="tab-pane"
        role="tabpanel"
        :id="list.id"
      >
        <shopping-list-component :id="list.id" :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
//! Depronto pone problemas el item.id por que se repite.
import ShoppingListComponent from "./components/ShoppingListComponent";
import ShoppingListTitleComponent from "./components/ShoppingListTitleComponent";
import store from "./vuex/store.js";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: { ShoppingListComponent, ShoppingListTitleComponent },
  computed: mapGetters({
    shoppinglists: "getLists"
  }),
  store
};
</script>
