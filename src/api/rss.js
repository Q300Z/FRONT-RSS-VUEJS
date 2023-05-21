const API_URL = "http://localhost:3000/";

export default {
  async getFlux() {
    return await new Promise((resolve) => {
      fetch(API_URL)
        .then((response) => response.json()) // Convertit la réponse en JSON
        .then((data) => resolve(data)) // Renvoie les données obtenues en tant que résultat de la promesse
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des données :",
            error
          );
          resolve(null); // Renvoie null en cas d'erreur
        });
    });
  },

  async getArticle(idFlux) {
    return await new Promise((resolve) => {
      fetch(API_URL + "articles/" + idFlux)
        .then((response) => response.json()) // Convertit la réponse en JSON
        .then((data) => resolve(data)) // Renvoie les données obtenues en tant que résultat de la promesse
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des données :",
            error
          );
          resolve(null); // Renvoie null en cas d'erreur
        });
    });
  },
};
