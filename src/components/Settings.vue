<template>
  <v-container>
    <v-list subheader two-line flat>
      <v-subheader>General</v-subheader>
      <v-list-item-group v-model="settings" multiple>
        <v-list-item>
          <template v-slot:default="{ active, }">
            
            <v-list-item-content>
              <v-list-item-title>Turn on Dark theme</v-list-item-title>
              <v-list-item-subtitle
                >To enable Dark theme to this page</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-spacer></v-spacer>

            <v-list-item-action>
            <v-switch :input-value="active"></v-switch>
          </v-list-item-action>
          </template>
        </v-list-item>
      </v-list-item-group>
      <v-divider></v-divider>
    </v-list>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        settings: [],
    })
};
</script>
