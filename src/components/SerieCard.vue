<template>
    <div class="card"  :style="{ backgroundImage: `url(${serie.image?.original || 'https://static.tvmaze.com/uploads/images/original_untouched/280/701095.jpg'}` }"> 
        <div class="overlay" data-test="modal-click" @click="openModal">
            <h2>{{serie.name}}</h2>
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
     display: flex;
     width: 32rem;
     height: 18rem;
     margin: 1rem 1rem;
     background-repeat: no-repeat;
     background-size: cover;
     border: 2px solid transparent;
     
 }
 .overlay {
     width: 100%;
     height: 100%;
     background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.603));
     display: flex;
     flex-grow: 1;
    justify-content: flex-start;
     align-items:flex-end;
     background-size:cover;
     border: 2px solid transparent;
 }

 .card:hover {
     border: 2px solid #99e9f2;
     box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.432);
 }
 
 h2 {
     color: white;
     padding-left: 1rem
     
 }

 img {
     border-top-left-radius: 1rem;
     border-top-right-radius: 1rem;
     max-height: 16rem;
 }
</style>