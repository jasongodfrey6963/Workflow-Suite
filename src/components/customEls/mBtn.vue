<template>

    <v-card type="checkbox" class="blue darken-2"   dark id="btn-wrapper">
        
            <v-card-text   id="menuBtn" ref="selection" :class="styleClass"
            :label="label" :value="value" :selected='selected' @click="editItem" class="py-1 px-1"><slot></slot>

            </v-card-text>
        
    </v-card>

</template>
<script>
export default {
  props: {
    label: String,
    value: String
  },
  mBtn: "menu-btn",
  data: function() {
    return { selected: false };
  },
  computed: {
    styleClass: function() {
      return {
        "deep-orange darken-2": this.selected
      };
    },
    selectedValue: function() {
      return this.$refs.selection.attributes.value.value;
    },
    selectedLabel: function() {
      return this.$refs.selection.attributes.label.value;
    },
    currentItem: function() {
      return this.$store.state.currentItem;
    }
  },
  methods: {
    /*select: function() {
      this.selected = !this.selected;
      this.$emit("onSelect", {
        selected: this.selected,
        label: this.selectedLabel,
        value: this.selectedValue
      });
    },*/

    editItem: function() {
      this.$store.commit("editItem", {
        key: this.selectedLabel,
        value: this.selectedValue
      });
      this.$forceUpdate();
    }
  },
  mounted: function() {
    var value = this.selectedValue;
    var item = Object.values(this.currentItem);

    if (
      item.indexOf(value) != -1 ||
      this.currentItem.toppings.indexOf(value) != -1
    ) {
      this.selected = true;
    } else {
      this.selected = false;
    }
  },
  updated: function() {
    var value = this.selectedValue;
    var item = Object.values(this.currentItem);

    if (
      item.indexOf(value) != -1 ||
      this.currentItem.toppings.indexOf(value) != -1
    ) {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }
};
</script>
<style>
#menuBtn {
  width: 64px;
  height: 64px;
  font-size: 12px;
  cursor: pointer;
}
#btn-wrapper {
  width: 64px;
  height: 64px;
  background-color: inherit;
  margin-top: 6px;
  margin-left: 8px;
  margin-bottom: 6px;
  margin-right: 8px;
  border-radius: 5px !important;
}
</style>
