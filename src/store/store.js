import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pizzaOpts: {
      sizes: {
        small: "10",
        medium: "12",
        large: "14",
        xlarge: "16"
      },
      crusts: {
        thin: "Thin Crust",
        ht: "Hand Tossed",
        bp: "Buttery Pan",
        brklyn: "Brooklyn"
      },
      toppings: {
        X: "Pizza Sauce",
        C: "Pizza Cheese",
        P: "Pepperoni",
        H: "Ham",
        B: "Beef",
        S: "Sausage",
        K: "Bacon",
        Pm: "Philly Steak",
        O: "Onion",
        G: "Green Pepper",
        M: "Mushroom",
        R: "Black Olives",
        J: "Jalepeno",
        N: "Pineapple",
        Z: "Banana Pepper",
        Pv: "Provolone",
        As: "Parm/ Asiago",
        D: "Cheddar",
        Rr: "Roasted Red Peppers"
      }
    },
    pizzaItem: {
      qty: {
        type: Number,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      crust: {
        type: String,
        required: true
      },
      toppings: {
        type: Array
      }
    },
    drinkItem: {
      qty: "",
      size: "",
      flavor: ""
    },
    currentOrder: [],
    currentItem: {
      qty: { default: 1 },
      size: "",
      flavor: "",
      toppings: []
    },
    showModal: false
  },
  mutations: {
    openOrder: state => {
      state.showModal = true;
    },
    closeOrder: state => {
      state.showModal = false;
    },
    editItem: (state, payload) => {
      switch (payload.key) {
        case "increase":
          state.currentItem.qty.default++;
          break;
        case "decrease":
          if (state.currentItem.qty.default != 1) {
            state.currentItem.qty.default--;
          } else {
            state.currentOrder.qty.default = 1;
          }
          break;
        case "size":
          if (state.currentItem.size != payload.value) {
            state.currentItem.size = payload.value;
          } else {
            state.currentItem.size = "";
          }
          break;
        case "flavor":
          if (state.currentItem.flavor != payload.value) {
            state.currentItem.flavor = payload.value;
          } else {
            state.currentItem.flavor = "";
          }
          break;
        case "toppings":
          if (state.currentItem.toppings.indexOf(payload.value) == -1) {
            state.currentItem.toppings.push(payload.value);
          } else {
            var index = state.currentItem.toppings.indexOf(payload.value);
            state.currentItem.toppings.splice(index, 1);
          }
          break;
      }
    }
  }
});
