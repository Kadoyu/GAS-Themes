<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll scroll-target="#scrolling-techniques-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">
        {{ this.$route.name }}
        <v-hover v-slot="{ hover }">
          <v-btn
            absolute
            right
            fab
            :elevation="hover ? 12 : 2"
            :color="isDisabled ? '' : 'primary'"
            @click="
              isDisabled = !isDisabled;
              overlay = !overlay;
            "
            ><v-icon v-if="isDisabled">mdi-lightbulb-off</v-icon>
            <v-icon v-else>mdi-lightbulb-on</v-icon>
          </v-btn>
        </v-hover>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-speed-dial
        v-model="fab"
        direction="left"
        transition="slide-x-reverse-transition"
      >
        <v-btn fab small to="/about">
          <v-icon>mdi-information-outline</v-icon></v-btn
        >

        <template v-slot:activator>
          <v-btn v-model="fab" icon @click="hidden = !hidden">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> GAS Themes </v-list-item-title>
          <v-list-item-subtitle>
            <v-chip class="ma-2" label>version : {{ version }}</v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item"
          @click="title = item.title"
          link
          :to="item.href"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="my-10">
          <v-row justify="center" no-gutters>
            <v-hover v-for="link in links" :key="link" v-slot="{ hover }">
              <v-btn
                color="primary"
                :elevation="hover ? 12 : 2"
                :href="link.href"
                target="_blank"
                class="mx-4"
                fab
                small
              >
                <v-icon> {{ link.icon }} </v-icon>
              </v-btn>
            </v-hover>
          </v-row>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      height="500"
    >
      <v-main>
        <router-view></router-view>
        <v-overlay :value="overlay" z-index="0"></v-overlay>
      </v-main>
    </v-sheet>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Kadoyu</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import manifest from "../public/manifest.json";
export default {
  data: () => ({
    name: "",
    drawer: false,
    about: false,
    hidden: false,
    isDisabled: false,
    overlay: false,
    links: [
      {
        title: "Twitter",
        icon: "mdi-twitter",
        href: "https://twitter.com/wakiwakkii",
      },
      {
        title: "Github",
        icon: "mdi-github",
        href: "https://github.com/Kadoyu",
      },
    ],
    items: [
      { title: "Themes", icon: "mdi-view-dashboard", href: "/" },
      { title: "Settings", icon: "mdi-cog", href: "/settings" },
      { title: "About", icon: "mdi-help-box", href: "/about" },
    ],
    version: manifest.version,
  }),
  methods: {},
};
</script>
