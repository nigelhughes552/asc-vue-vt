<template>
  <v-layout>
    <v-flex xs12>hello</v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      right: null
    };
  }
};
</script>