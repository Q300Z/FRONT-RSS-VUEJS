<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="1" scroll-behavior="hide">
        <v-app-bar-title>FRONT-RSS-VUEJS</v-app-bar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">About</v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
