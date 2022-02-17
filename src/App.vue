<template>
  <div id="nav">
    <logo class="logo"></logo>
    <div class="genres">
      <router-link to="/">Home</router-link>
      <router-link v-for="(genre, index) in genresToArray" :key="index" :to="`/genres/${genre}`" v-text="genre"></router-link>
    </div>
    <div class="nav_search">
    <search></search>
    </div>

  </div>
  <router-view/>
  <modal v-if="modalIsFilled"></modal>
</template>
<script>
import Modal from './components/Modal.vue'
import search from './components/Search.vue'
import Logo from './components/Logo.vue'
export default {
  components: {
    Modal,
    search,
    Logo
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
    },
    searchField() {
      return this.$store.state.searchField
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
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items: center;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.6rem 1rem;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  margin: 0.2rem;
}

#nav a.router-link-exact-active {
  color: #495057;
  background-color: #99e9f2;
  border: 1px solid #495057;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(146, 151, 156, 0.5);
}

.nav_search {
  display: flex;  
}

.nav_search .icon {
  height: 1.5rem;
  width: 1.5rem;
 }

 @media only screen and (max-width: 2600px) {
   #nav {
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: center;
   }
   .logo {
     /* visibility: hidden; */
     margin: 3rem;
   }
   .nav_search {
     margin-top: 3rem;
   }
 }
</style>
