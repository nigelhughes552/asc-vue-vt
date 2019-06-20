  <template>
  <v-toolbar fixed clipped-left app dark class="teal lighten-4">
    <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>All Souls Collage</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/people" color="primary">People</v-btn>
      <v-btn flat to="/about" color="primary">Committees</v-btn>
      <v-btn flat color="primary">Assets</v-btn>
      <v-btn flat color="primary">Rooms</v-btn>
      <v-btn flat color="primary">Admin</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
  
  