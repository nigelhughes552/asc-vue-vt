<template>
  <v-layout mt-3 row wrap>
    <v-flex sm6>
      <v-card>
        <v-card-title class="subheading grey lighten-4">{{title}}</v-card-title>
        <v-card-text>
          <ul>
            <li style="list-style-type: square;" v-for="item in dataText">{{ item.message }}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  props: {
    title: String,
    dataText: Array
  }
};
</script>

<style>
</style>
