<template>
  <v-navigation-drawer v-model="drawer" clipped app>
    <v-toolbar flat>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-title class="title">Application</v-list-tile-title>
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
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
          title: "People",
          items: [
            { title: "Add New Person" },
            { title: "Show/Hide filters" },
            { title: "Advanced Search" }
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
            { title: "List Item" },
            { title: "List Item" }
          ]
        },
        {
          action: "healing",
          title: "Health",
          items: [{ title: "List Item" }]
        },
        {
          action: "content_cut",
          title: "Office",
          items: [{ title: "List Item" }]
        },
        {
          action: "local_offer",
          title: "Promotions",
          items: [{ title: "List Item" }]
        }
      ]
    };
  }
};
</script>