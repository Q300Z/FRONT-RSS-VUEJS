import { createStore } from "vuex";
import flux from "./modules/flux";
import articles from "./modules/articles";

export default createStore({
  modules: { flux, articles },
});
