<template>

  <v-dialog v-model="dialog" persistent max-width="400px">
    <v-btn slot="activator"
        flat class="mx-0 px-0"             
    >
        <span>TIMECLOCK</span>
      </v-btn>
      <v-card>
        <v-card-title class="headline" >TIME CLOCK</v-card-title >
        <v-card-text>
          <v-form
           ref="form" 
           v-model="valid" 
           lazy-validation
          >
            <v-text-field
            id="name"
            v-model="empId"
            :rules="nameRules"
            
            counter="10"
            label="Employee ID"
            required
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              counter="10"
              label="Password"
              :rules="passRules"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat :empId="empId" :password="password" @click="clockIn(empId, password); dialog = false" :disabled="empId == '' || password == ''">CLOCK IN</v-btn>
          <v-btn flat @click="dialog = false">CANCEL</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>

</template>

<script>
export default {
  name: "TimeClock",
  data() {
    return {
      dialog: false,
      valid: true,
      empId: "",
      password: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be  less than 10 characters"
      ],
      passRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 2) || "Password must be more than 2 characters"
      ]
    };
  },
  computed: {
    clockedIn: () => {
      return this.$store.state.clockedIn;
    }
  },

  methods: {
    clockIn: function(empId, password) {
      this.$store.commit("clockIn", {
        id: this.empId,
        password: this.password
      });
    }
  }
};
</script>

<style>
v-card {
  max-width: 600px;
}
</style>

