<template>
    <div class="card" @click="openModal"> 
        <img :src="serie.image.original" alt="">
        <div class="description">
            <h2>{{serie.name}}</h2>
            <div v-html="serie.summary"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        serie: Object,
    },
    methods: {
        openModal() {
            this.$store.commit('toggleModal')
            this.$store.commit('fillModal', this.serie)
        }
    }
    
}
</script>
<style scoped>
 .card {
     border: 1px solid gray;
     border-radius: 1rem;
     display: flex;
     flex-direction: column;
     max-width: 14rem;
     margin: 1rem 1rem;
 }
 .description {
     display: flex;
     flex-direction: column;
     max-width: 13rem;
     margin: 0 auto;
     padding: 1rem;
     font-size: 0.6rem;
 }

 .description div {
     text-align: left;
 }

 img {
     border-top-left-radius: 1rem;
     border-top-right-radius: 1rem;
     max-height: 16rem;
 }
</style>