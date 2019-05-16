<template>
  <div id="root">
    <v-layout row fill-height>
      <v-flex xs2 class="sidebar">
        <v-layout column fill-height>
          <v-card class="lime lighten-4">
            <v-card-title class="pt-2">
              <strong>Customer Info Here</strong>
            </v-card-title>
            <v-card-text>
              <strong>Additional Info</strong>
            </v-card-text>
            <v-card-text>
              <strong>Carryout/Deliver Here</strong>
            </v-card-text>
          </v-card>
          <v-divider></v-divider>
          <v-card class="lime lighten-4">
            <v-card-title class="pt-2">
              <strong>1 Example Charge</strong>
            </v-card-title>
            <v-card-text class="text-xs-right pr-2 py-1">
              <strong>$2.49</strong>
            </v-card-text>
          </v-card>
          <v-divider></v-divider>
          <v-card class="lime lighten-4">
            <v-card-title class="pt-2">
              <strong>
                {{currentItem.qty.default}}
                <span>{{currentItem.size}}"</span>
                {{currentItem.flavor}} Pizza
              </strong>
            </v-card-title>
            <v-card-text
              v-for="topping in currentItem.toppings"
              :key="topping.index"
              class="pl-2 py-0"
            >
              <strong>{{topping}}</strong>
            </v-card-text>

            <v-card-text class="text-xs-right pr-2 py-1">
              <strong>$9.99</strong>
            </v-card-text>
          </v-card>
          <v-layout column justify-end>
            <v-card class="lime darken-3">
              <v-layout row>
                <v-card-text class="pl-1 py-1" xs6>
                  <strong>Paid</strong>
                </v-card-text>
                <v-card-text class="text-xs-right py-1 pr-1" xs6>
                  <strong>$0.00</strong>
                </v-card-text>
              </v-layout>
              <v-layout row>
                <v-card-text class="pl-1 py-0" xs6>
                  <strong>(1 Item) Total</strong>
                </v-card-text>
                <v-card-text class="text-xs-right py-0 pr-1" xs6>
                  <strong>$12.92</strong>
                </v-card-text>
              </v-layout>
            </v-card>

            <v-card class="lime lighten-4">
              <v-layout row>
                <v-card-text class="py-1" xs4>
                  <i class="material-icons">arrow_drop_up</i>
                </v-card-text>
                <v-card-text class="py-1" xs4>
                  <i class="material-icons">arrow_drop_down</i>
                </v-card-text>
                <v-card-text class="py-1" xs4>Tax & Total</v-card-text>
              </v-layout>
            </v-card>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs10 class="main">
        <pizza-screen></pizza-screen>
      </v-flex>
      <v-flex xs1 class="sidebar">
        <v-card dark class="red">
          <v-card-title class="pt-0 pl-0">Exit Order</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>
              <i class="material-icons">cancel</i>
            </h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Customer</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Greetings/Specials</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Pizzas</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Everything Else</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Coupons</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Payments</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
        <v-card dark class="blue darken-2">
          <v-card-title class="pt-0 pl-0">Finish</v-card-title>
          <v-card-text class="text-xs-right py-0 pr-1">
            <h1>Filler</h1>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import pizzaScreen from "./ordercomponents/pizzaScreen.vue";
export default {
  newOrder: "order-screen",
  components: {
    pizzaScreen
  },
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
  },
  methods: {}
};
</script>

<style>
#root {
  height: 100%;
  width: 100%;
}
.opts-card {
  border-radius: 10px !important;
}

.sidebar {
  background-color: #f0f4c3;
}
.main {
  background-color: #bbdefb;
}
</style>
