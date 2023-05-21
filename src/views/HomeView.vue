<template>
  <div>
    <v-container fluid>
      <v-navigation-drawer permanent width="500">
        <ListFlux />
      </v-navigation-drawer>
      <v-divider vertical></v-divider>

      <ListArticle v-if="currentFlux" :flux="currentFlux" />
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

// Components
import ListFlux from "@/components/ListFlux.vue";
import ListArticle from "@/components/ListArticle.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ListFlux,
    ListArticle,
  },
  computed: {
    ...mapState("flux", ["currentFlux"]),
  },
});
</script>
