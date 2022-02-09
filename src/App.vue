<template>
  <div id="nav">
    <router-link v-for="(genre, index) in genresToArray" :key="index" :to="`/genres/${genre}`" v-text="genre"></router-link>
  </div>
  <router-view/>
</template>
<script>
export default {

  data() {
    return {
      
    }
  },
  computed: {
    genresToArray() {
      return Array.from(this.$store.state.genres)
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
