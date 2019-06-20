<template>
  <v-layout mt-3 row wrap>
    <v-flex sm6>
      <v-card>
        <v-card-title class="subheading grey lighten-4">{{title}}</v-card-title>
        <v-card-text>
          <ul>
            <li style="list-style-type: square;" v-for="item in items">{{ item.message }}</li>
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
      items: [
        { message: "Academic Administrator and Domestic Bursar -" },
        { message: "Chichele Professor of Medieval History  -" }
      ]
    };
  },
  props: {
    title: String
  }
};
</script>

<style>
</style>
