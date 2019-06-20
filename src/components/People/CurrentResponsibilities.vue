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
        { message: "Acting Bursar 03/04/2018 -" },
        { message: "Academic Secretary 01/04/2018 -" },
        { message: "Acting Domestic Bursar 13/03/2018 -" },
        { message: "Acting Domestic Bursar 13/03/2018 -" },
        { message: "Librarian 01/10/2015 -" },
        { message: "Diversity Fellow 06/06/2013 -" },
        { message: "Camerarius  -" }
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



