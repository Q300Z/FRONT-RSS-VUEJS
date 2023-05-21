import rss from "@/api/rss";

const state = () => ({
  articles: [],
});

const getters = {
  articlesFlux: (state) => {
    return state.articles;
  },
};

const actions = {
  async getArticles({ commit }, idFlux) {
    const articles = await rss.getArticle(idFlux);
    commit("setArticles", articles);
  },
};

const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
