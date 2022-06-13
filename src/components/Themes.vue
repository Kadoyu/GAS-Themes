<template>
  <v-container>
    <v-row>
      <v-col v-for="theme in themes" :key="theme" cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="theme.img" height="200px"></v-img>

          <v-card-title>{{ theme.title }}</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" outlined text :value="theme.id"
              >SELECT</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "Themes",
    themes: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "hoge",
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "fuga",
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "hoge",
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "fuga",
      },
    ],
  }),
};
</script>
