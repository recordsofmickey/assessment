import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    genres: new Set(),
    shows: [],
    errors: ''
  },
  mutations: {
    fillShows(state, response) {
      state.shows = response;
    },
    fillGenres(state) {
      state.shows.forEach(item => item.genres.forEach(genre => state.genres.add(genre)));
    }
  },
  actions: {
    getShows({commit}) {
      axios.get('https://api.tvmaze.com/shows')
      .then(response => {commit('fillShows', response.data)})
      .then(function() {
        commit('fillGenres')
      })
    }
  },
  modules: {
  }
});


