<template>
  <div>
    <v-badge left>
      <template v-slot:badge>
        <span>{{id}}</span>
      </template>
      <span>Examples</span>
    </v-badge>

    <v-btn color="success" v-on:click="great">Success</v-btn>
    <CurrentFellowships :id="id" title="Current Fellowships"></CurrentFellowships>
    <CurrentAppointments title="Current Appointments"></CurrentAppointments>
    <CurrentResponsibilities :id="id" title="Current Responsibilities"></CurrentResponsibilities>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CurrentFellowships from "@/components/People/CurrentFellowships";
import CurrentAppointments from "@/components/People/CurrentAppointments";
import CurrentResponsibilities from "@/components/People/CurrentResponsibilities";

export default {
  data() {
    return {
      id: 0
    };
  },
  methods: {
    ...mapActions([
      "fetchResponsibilities",
      "fetchFellowships",
      "fetchAppointments"
    ]),
    great: function(event) {
      this.id += 1;
      this.fetchResponsibilities(this.id);
      this.fetchFellowships(this.id);
      this.fetchAppointments(this.id);
    }
  },
  components: {
    CurrentFellowships,
    CurrentAppointments,
    CurrentResponsibilities
  }
};
</script>

<style>
</style>
