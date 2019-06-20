<template>
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
              <v-list-tile-title to="/people">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile v-for="subItem in item.items" :key="subItem.title">
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
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: "fas fa-user",
          title: "Detail",
          items: [
            { title: "Name", route: "/name" },
            { title: "Summary" },
            { title: "Contact Information" },
            { title: "Subjects" },
            { title: "Images" },
            { title: "Post-nominals" },
            { title: "Files" },
            { title: "Rights" },
            { title: "Historic Data" },
            { title: "Other" },
            { title: "Assets" }
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