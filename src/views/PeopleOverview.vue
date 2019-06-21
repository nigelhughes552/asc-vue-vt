<template>
  <div>
    <v-btn color="success" v-on:click="id += 1">Success</v-btn>
    <CurrentFellowships title="Current Fellowships"></CurrentFellowships>
    <CurrentAppointments title="Current Appointments"></CurrentAppointments>
    <CurrentResponsibilities :id="id" title="Current Responsibilities"></CurrentResponsibilities>
  </div>
</template>

<script>
import CurrentFellowships from "@/components/People/CurrentFellowships";
import CurrentAppointments from "@/components/People/CurrentAppointments";
import CurrentResponsibilities from "@/components/People/CurrentResponsibilities";

export default {
  data() {
    return {
      id: 10
    };
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
