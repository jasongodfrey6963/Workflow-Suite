<template>
  <v-layout column justify-start fill-height>
    <v-flex xs10>
      <v-layout row wrap align-start justify-center>
        <v-flex xs10 class="pt-4">
          <v-layout row wrap justify-end>
            <m-btn class="success text-xs-center" value="value">NEW PIZZA</m-btn>
            <m-btn class="blue-grey darken-1 text-xs-center" label="decrease" value="dec">Down</m-btn>
            <v-card class="px-0 mx-0" height="64px" style="margin-top: 6px;">
              <v-card-text class="py-0">QTY</v-card-text>
              <v-card-text class="py-0">{{ currentItem.qty.default }}</v-card-text>
            </v-card>
            <m-btn class="blue-grey darken-1 text-xs-center" label="up" value="inc">UP</m-btn>
            <m-btn class="red text-xs-center" value="value">DELETE PIZZA</m-btn>
          </v-layout>
          <p class="mb-0 ml-1">
            <strong>Select the Pizza Size, Crust, and Toppings</strong>
          </p>
          <v-card dark class="opts-card mt-0">
            <v-card-title class="headline pt-1 pl-3 light-blue darken-4">Size</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="lime lighten-4 py-0 px-0">
              <v-layout row wrap>
                <m-btn v-for="size in sizes" :key="size.index" label="size" :value="size">{{size}}</m-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs10 class="py-0">
          <v-card dark class="opts-card">
            <v-card-title class="headline pt-1 pl-3 light-blue darken-4">Crust</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="lime lighten-4 py-0 px-0">
              <v-layout row>
                <m-btn
                  v-for="crust in crusts"
                  :key="crust.index"
                  label="flavor"
                  :value="crust"
                >{{crust}}</m-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs10 class="py-0">
          <v-card dark class="opts-card">
            <v-card-title class="headline pt-1 pl-3 light-blue darken-4">Toppings</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="lime lighten-4 py-0 px-0">
              <v-layout row wrap>
                <m-btn
                  v-for="topping in toppings"
                  :key="topping.index"
                  label="toppings"
                  :value="topping"
                >{{topping}}</m-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import mBtn from "../customEls/mBtn";
export default {
  name: "pizzaScreen",
  components: { mBtn },
  data() {
    return {};
  },
  computed: {
    sizes: function() {
      return this.$store.state.pizzaOpts.sizes;
    },
    crusts: function() {
      return this.$store.state.pizzaOpts.crusts;
    },
    toppings: function() {
      return this.$store.state.pizzaOpts.toppings;
    },
    currentItem: function() {
      return this.$store.state.currentItem;
    }
  }
};
</script>

<style>
.opts-card {
  border-radius: 10px !important;
}
</style>
