<template>
  <div>
    <PersonPager></PersonPager>
    <NameCard :id="id"></NameCard>

    <CurrentFellowships :id="id" title="Current Fellowships"></CurrentFellowships>
    <CurrentAppointments :id="id" title="Current Appointments"></CurrentAppointments>
    <CurrentResponsibilities :id="id" title="Current Responsibilities"></CurrentResponsibilities>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NameCard from "@/components/People/NameCard";
import CurrentFellowships from "@/components/People/CurrentFellowships";
import CurrentAppointments from "@/components/People/CurrentAppointments";
import CurrentResponsibilities from "@/components/People/CurrentResponsibilities";
import PersonPager from "@/components/PersonPager";

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
  },
  components: {
    CurrentFellowships,
    CurrentAppointments,
    CurrentResponsibilities,
    NameCard,
    PersonPager
  }
};
</script>