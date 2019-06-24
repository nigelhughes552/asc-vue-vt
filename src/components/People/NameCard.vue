<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-card>
        <div mr-2 style="padding-left:16px;">
          <v-avatar size="100" tile>
            <img src="fc.png" alt="avatar">
          </v-avatar>
        </div>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{person.displayName}}</h3>
            <p class="subheading mb-0">{{person.displayPostnominals}}</p>
            <p class="subheading mb-0">
              Display on webpage?
              <span v-if="person.personDisplayOnWebPage">
                <v-icon>mdi mdi-check-network-outline</v-icon>
              </span>
              <span v-else>
                <v-icon>mdi mdi-close-network-outline</v-icon>
              </span>
            </p>
            <p class="subheading mb-0">{{person.publicEmailAddress}}</p>
            <div></div>
          </div>
        </v-card-title>
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
    ...mapActions(["fetchPerson"])
  },
  computed: mapGetters(["person"]),
  created() {
    this.fetchPerson(this.id);
  },
  props: {
    id: Number
  }
};
</script>

<style>
</style>
