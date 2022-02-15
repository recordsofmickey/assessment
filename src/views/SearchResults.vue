<template>
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
    computed: {
        selectedShows() {
            return this.$store.state.searchResult;
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