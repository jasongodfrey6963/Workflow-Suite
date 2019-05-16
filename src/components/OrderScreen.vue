<template id="order-modal">
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <v-card class="modal-container">
                <v-card-title class="headline">
                    <span>{{ currentTitle }}</span>
                </v-card-title>
                <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            v-model="empId"
            label="Employee ID"
            value=""
            :rules="idRules"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :rules="passRules"
          ></v-text-field>
        </v-card-text>
      </v-window-item>

      <v-window-item id="new-order" :value="2" >
        <v-card-text>
          <v-layout col>
              <v-flex  >
                  <div height="100%" width="50px"></div>
              </v-flex>
          </v-layout>
          <v-layout row wrap>
              <v-flex class="py-12" xs12>
              <span  class="headline">Size</span><v-divider></v-divider><br></v-flex>
              
              <v-flex xs12>
                  <v-chip  label outline color="blue" v-for="size in pizza.size" :key="size.index" xs2>{{size}}</v-chip>
              </v-flex>
              <v-flex xs12>
                  <span class="headline">Crust</span><v-divider></v-divider><br>
              </v-flex>
              
              <v-flex xs12>
                  <v-chip label outline color="blue" v-for="crust in pizza.crust" :key="crust.index">{{crust}}</v-chip>
              </v-flex>
              <v-flex xs12>
                  <span class="headline">Toppings</span><v-divider></v-divider><br>
              </v-flex>
              <v-flex xs12>
                  <v-chip label outline color="blue" v-for="toppings in pizza.toppings" :key="toppings.index">{{toppings}}</v-chip>
              </v-flex>
          </v-layout>
        </v-card-text>
      </v-window-item>

    </v-window>

    <v-divider></v-divider>

    <v-card-actions><v-spacer></v-spacer>
      <v-btn
        flat
        @click="closeOrder"
      >
        CANCEL
      </v-btn>
      
      <v-btn
        
        flat
        @click="step++"
      >
        {{currentTitle}}
      </v-btn>
    </v-card-actions>
            </v-card>
        </div>
    </div>

</transition>
    
</template>

<script>
export default {
  name: "OrderScreen",
  data() {
    return {
      valid: true,
      empId: "",
      password: "",
      idRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be  less than 10 characters"
      ],
      passRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 2) || "Password must be more than 2 characters"
      ],
      step: 1,
      orderList: [],
      pizza: {
        size: ["10", "12", "14"],
        crust: ["Hand Tossed", "Thin", "Pan"],
        toppings: [
          "Cheese",
          "Pepperoni",
          "Green Peppers",
          "Mushrooms",
          "Olives",
          "Chives"
        ]
      }
    };
  },

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "LOGIN";
        case 2:
          return "ORDER";
      }
    }
  },

  methods: {
    closeOrder: function() {
      this.$store.commit("closeOrder");
    },
    renderItem: function() {}
  }
};
</script>
  
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;

  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
