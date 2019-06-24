<template>
  <v-layout mt-3 row wrap>
    <v-flex sm6>
      <v-card>
        <v-card-title class="subheading grey lighten-4">{{title}}</v-card-title>
        <v-card-text>
          <ul>
            <li
              style="list-style-type: square;"
              v-for="item in allAppointments"
              :key="item.id"
            >{{ item.appointment }} {{item.startDate | formatDate}} - {{item.endDate | formatDate}}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchAppointments"])
  },
  computed: mapGetters(["allAppointments"]),
  created() {
    this.fetchAppointments(this.id);
  },
  props: {
    title: String,
    id: Number
  }
};
</script>

<style>
</style>
