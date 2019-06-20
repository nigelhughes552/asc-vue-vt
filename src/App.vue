<template>
  <v-app>
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
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-toolbar flat>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-title class="title">Overview</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title router to="/people">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            router
            :to="subItem.route"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <name-card></name-card>

        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar";
import PersonSideNav from "./components/PersonSideNav";
import NameCard from "@/components/NameCard";
import Todos from "@/components/todos.vue";

export default {
  name: "App",
  components: {
    ToolBar,
    PersonSideNav,
    NameCard,
    Todos
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          action: "fas fa-user",
          title: "Detail",
          items: [
            { title: "Name", route: "/name" },
            { title: "Summary", route: "/summary" },
            { title: "Contact Information", route: "/contact" },
            { title: "Subjects", route: "/subjects" },
            { title: "Images", route: "/images" },
            { title: "Post-nominals", route: "/postnominals" },
            { title: "Files", route: "/files" },
            { title: "Rights", route: "/rights" },
            { title: "Historic Data", route: "/historic" },
            { title: "Other", route: "/other" },
            { title: "Assets", route: "/assets" }
          ]
        },
        {
          action: "group_work",
          title: "Committees",
          items: [{ title: "Add New Committee" }]
        },
        {
          action: "fas fa-crown",
          title: "Assets",
          items: [{ title: "Add new" }, { title: "Save PDF" }]
        },
        {
          action: "far fa-building",
          title: "Rooms",
          items: [
            { title: "List Item" },
            { title: "List Item2" },
            { title: "List Item3" }
          ]
        },
        {
          action: "healing",
          title: "Health",
          items: [{ title: "List Item4" }]
        },
        {
          action: "content_cut",
          title: "Office",
          items: [{ title: "List Item5" }]
        },
        {
          action: "local_offer",
          title: "Promotions",
          items: [{ title: "List Item6" }]
        }
      ]
    };
  }
};
</script>
