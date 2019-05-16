<template>
  <div id="app">
    <v-app>
        <Toolbar/>

        <new-order></new-order>
        <!--<Home/>
        <OrderScreen v-if="showModal"/>-->
    </v-app>
    
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Home from "./components/Home";
import OrderScreen from "./components/OrderScreen";
import newOrder from "./components/newOrder";
export default {
  name: "App",
  components: {
    Toolbar,
    Home,
    OrderScreen,
    newOrder
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    }
  },
  methods: {}
};
</script>

<style>
</style>
