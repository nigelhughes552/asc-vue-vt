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
            <h3 class="headline mb-0">Fraser Campbell</h3>
            <p class="subheading mb-0">{{postnoms}}</p>

            <div>{{ card_text }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        "Fraser Campbell re-entered Fellowship in summer 2013. Alongside his practice as a barrister in London, Fraser has recently presented papers to professional conferences on legal topics such as the recent reforms to the law on whistle-blowing.",
      postnoms: "BEcon (Hons), BM, MA, AcSS"
    };
  }
};
</script>

<style>
</style>
