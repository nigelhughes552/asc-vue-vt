<template>
  <v-layout wrap row>
    <v-flex xs6>
      <v-card>
        <v-layout ma-1 pa-2 row>
          <v-flex xs3>Title</v-flex>
          <v-flex xs3>{{title}}</v-flex>
        </v-layout>
        <v-layout ma-1 pa-2 row>
          <v-flex xs3>Forenames</v-flex>
          <v-flex xs3>{{forenames}}</v-flex>
        </v-layout>
        <v-layout ma-1 pa-2 row>
          <v-flex xs3>Surname</v-flex>
          <v-flex xs3>{{surname}}</v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
      


<script>
import NameCard from "@/components/NameCard";
export default {
  components: {
    NameCard
  },
  data() {
    return {
      title: "Professor",
      forenames: "Nigel",
      surname: "Hughes"
    };
  }
};
</script>


<style>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.border {
  border-style: solid;
  border-width: 1px;
}
</style>
