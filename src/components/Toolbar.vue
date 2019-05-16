<template>
  <v-toolbar v:bind:location="location">
      <v-toolbar-title class="headline text-uppercase">
        <span>Domiblows </span>
        <span class="font-weight-light">PIZZA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="openOrder" class="mx-0 px-0"><span>COUNTER</span></v-btn>
      <TimeClock />
    </v-toolbar>
</template>

<script>
import TimeClock from "./TimeClock.vue";

export default {
  name: "Toolbar",

  components: {
    TimeClock
  },

  methods: {
    openOrder: function() {
      this.$store.commit("openOrder");
    }
  }
};
</script>

<style>
</style>
