import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    genres: new Set(),
    shows: [],
    errors: '',
    modalActive: false,
    modalContent: {},
    searchField: '',
    searchResult: []
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
    },
    fillSearchResults(state, response) {
      state.searchResult = [];
      response.forEach(item => state.searchResult.push(item.show));
    },
    updateSearchField(state, input) {
      state.searchField = input;
    },
    emptySearch(state) {
      state.searchResult = [];
    }
  },
  actions: {
    getShows({commit}) {
      axios.get('https://api.tvmaze.com/shows')
      .then(response => {commit('fillShows', response.data)})
      .then(function() {
        commit('fillGenres')
      })
    },
    getSearchResults({commit}, query) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => {commit('fillSearchResults', response.data)})
    }
  },
  modules: {
  }
});


