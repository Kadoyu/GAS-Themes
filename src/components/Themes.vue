<template>
  <v-container>
    <v-row>
      <v-col v-for="theme in themes" :key="theme" cols="12" lg="3" sm="6">
          <v-card class="mx-auto" max-width="300">
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
    windowSize: 0,
    themes: [
      {
        id: 1,
        img: "https://i0.wp.com/www.playearth10.com/wp-content/uploads/2012/12/c076d3ed976bf535b631ecb9ee1e913a.jpg?fit=3840%2C2880&ssl=1",
        title: "hoge",
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        title: "fuga",
      },
      {
        id: 3,
        img: "https://pbs.twimg.com/media/FiAYzePVQAAppjC?format=jpg&name=large",
        title: "hoge",
      },
      {
        id: 4,
        img: "https://i0.wp.com/www.playearth10.com/wp-content/uploads/2012/12/c076d3ed976bf535b631ecb9ee1e913a.jpg?fit=3840%2C2880&ssl=1",
        title: "fuga",
      },
    ],
  }),
  create: function(){
    this.windowSize = window.innerWidth
  }
};
</script>
