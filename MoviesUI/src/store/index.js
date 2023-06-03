import Vue from "vue";
import Vuex from "vuex";

//Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
        {
            "id": 0,
            "name": "Movie movie",
            "description": "Movie movieMovie movieMovie movieMovie movieMovie movie",
            "releaseYear": 2023,
            "academyAward": false,
            "director": {
              "directorId": 0,
              "firstName": "t",
              "lastName": "d",
              "yearOfBirth": 2023
            }
          }
    ]
  },
  mutations: {
        
  },
  actions: {},
  modules: {},
  strict: true
});
