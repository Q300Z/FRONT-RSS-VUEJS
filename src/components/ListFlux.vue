<template>
  <v-card title="Liste des Flux" elevation="0">
    <v-list lines="one">
      <v-list-item
        v-for="item in flux"
        :key="item._id"
        :title="item.title"
        :subtitle="item.description"
        :value="item.description"
        color="primary"
        @click="selectFlux(item._id)"
      ></v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ListFlux",
  computed: mapState({
    flux: (state) => state.flux.flux,
  }),
  created() {
    this.$store.dispatch("flux/getFlux");
  },
  methods: {
    selectFlux(flux) {
      console.log(flux);
      this.$store.dispatch("flux/setCurrentFlux", flux);
      this.$store.dispatch("articles/getArticles", flux);
    },
  },
};
</script>
