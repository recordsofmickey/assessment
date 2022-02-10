import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    genres: new Set(),
    shows: [],
    errors: '',
    modalActive: false,
    modalContent: {}
  },
  mutations: {
    fillShows(state, response) {
      state.shows = response;
    },
    fillGenres(state) {
      state.shows.forEach(item => item.genres.forEach(genre => state.genres.add(genre)));
    },
    toggleModal(state) {
      state.modalActive = !state.modalActive;
    },
    fillModal(state, show) {
      state.modalContent = show;
    },
    closeModal(state) {
      state.modalContent = {};
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


