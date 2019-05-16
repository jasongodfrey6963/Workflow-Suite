<template> 
<v-layout id="home">
  <v-container grid-list-xl>
    <v-layout  row wrap fill-height >
      <v-flex v-for="phone in phones" 
      :key="phone.index" xs6
        >
        
        <v-card id="card" dark  
          v-model="phones"
          @click="openOrder"
          color="secondary" height="225px" width="100%"
        >
          <v-card-title
            class="px-1 py-1">
              {{phone.line}}
          </v-card-title>
          <v-card-text 
            class="px-0">

          </v-card-text>    
        </v-card>
       <!-- <v-card >
          <v-card-title class="headline">
              ORDER SCREEN
          </v-card-title>
          <v-card-text>This is a Test</v-card-text><v-spacer></v-spacer>
          <v-card-actions>
              <v-btn flat @click="dialog = false">CANCEL</v-btn>
          </v-card-actions>
      </v-card>-->
        
      </v-flex>
    </v-layout>
  </v-container>
</v-layout> 
</template>

<script>
export default {
  name: "Home",
  computed: {
    phones() {
      return this.$store.state.phones;
    }
  },
  data: () => {
    return {
      dialog: false
    };
  },
  methods: {
    openOrder: function() {
      this.$store.commit("openOrder");
    },

    phoneHandler: function() {
      this.openOrder;
    }
  }
};
</script>

<style>
#home {
  height: 100%;
  background-color: #90caf9;
}

#card {
  cursor: pointer;
}
</style>
