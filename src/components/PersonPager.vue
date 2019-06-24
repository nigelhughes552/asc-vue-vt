<template>
  <v-flex mb-2>
    <v-btn-toggle>
      <v-btn v-on:click="previous" flat>
        <v-icon>chevron_left</v-icon>Previous
      </v-btn>
      <v-btn v-on:click="next" flat>
        Next
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-btn-toggle>
    <v-badge color="green">
      <template v-slot:badge>
        <span>{{id}}</span>
      </template>
      <v-icon>person</v-icon>
    </v-badge>
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      id: 1
    };
  },
  methods: {
    ...mapActions([
      "fetchResponsibilities",
      "fetchFellowships",
      "fetchAppointments",
      "fetchPerson"
    ]),
    next: function(event) {
      this.fetchResponsibilities(this.id);
      this.fetchFellowships(this.id);
      this.fetchAppointments(this.id);
      this.fetchPerson(this.id);
      this.id += 1;
    },
    previous: function(event) {
      this.fetchResponsibilities(this.id);
      this.fetchFellowships(this.id);
      this.fetchAppointments(this.id);
      this.fetchPerson(this.id);
      this.id -= 1;
    }
  }
};
</script>

<style>
</style>
