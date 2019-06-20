<template>
  <div>
    <CurrentFellowships title="Current Fellowships"></CurrentFellowships>
    <CurrentAppointments title="Current Appointments"></CurrentAppointments>
    <CurrentResponsibilities title="Current Responsibilities"></CurrentResponsibilities>
  </div>
</template>

<script>
import CurrentFellowships from "@/components/People/CurrentFellowships";
import CurrentAppointments from "@/components/People/CurrentAppointments";
import CurrentResponsibilities from "@/components/People/CurrentResponsibilities";
export default {
  components: {
    CurrentFellowships,
    CurrentAppointments,
    CurrentResponsibilities
  }
};
</script>

<style>
</style>
