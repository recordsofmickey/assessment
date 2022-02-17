<template>
  <div><h1 data-test="header">{{ getGenre }}</h1></div>
  <div class="container">
        <serie-card v-for="(show, index) in selectedShows" :key="index" :serie="show" data-test="serie-card"></serie-card>  
  </div>
</template>
<script>
import SerieCard from '../components/SerieCard.vue'
export default {
    components: {
        SerieCard,
    },
    data() {
        return{
            genre: this.$router.currentRoute,
        }
    },
    computed: {
        getGenre() {
            return this.genre.fullPath.substring(8)
        },
        selectedShows() {
            return this.$store.state.shows.filter(show => show.genres.includes(this.getGenre)).sort((a,b) => { return b.rating.average - a.rating.average});
        }
    }, 
}
</script>
<style scoped>
    .container {
        max-width: 100%;
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>