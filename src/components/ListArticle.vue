<template>
  <v-card title="Liste des articles" elevation="0">
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="item in filteredArticles"
        :key="item._id"
        :title="item.title"
        :text="item.description"
      ></v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ListArticle",
  props: {
    flux: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    ...mapGetters("articles", {
      articlesFlux: "articlesFlux",
    }),
    filteredArticles() {
      return this.articlesFlux.filter(
        (article) => article.source === this.flux
      );
    },
  },
};
</script>
