<template>
  <div id="nav">
    <router-link v-for="(genre, index) in genresToArray" :key="index" :to="`/genres/${genre}`" v-text="genre"></router-link>
  </div>
  <router-view/>
  <modal v-if="modalIsFilled"></modal>
</template>
<script>
import Modal from './components/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      
    }
  },
  computed: {
    genresToArray() {
      return Array.from(this.$store.state.genres)
    },
    modalIsFilled() {
      return this.$store.state.modalActive
    }
  },
 mounted() { 
    this.$store.dispatch('getShows');
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
