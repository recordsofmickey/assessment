<template>
    <div class="modal" @click="closeModal" data-test="modal-overlay">
        <div class="modal-content">
            <img :src="modalContent.image?.medium" alt="">
            <span class="close" data-test="modal-close-btn">&times;</span>
            <h1>{{modalContent.name}}</h1>
            <p>{{modalContent.network?.name || 'No network known'}}</p>
            <p v-html="modalContent.summary"></p>
            <a v-if="modalContent.officialSite" :href="modalContent.officialSite" target="_blank">Click here for site</a>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        modalContent() {
           return this.$store.state.modalContent;
        }
     },
     methods: {
         closeModal() {
            this.$store.commit('toggleModal')
            this.$store.commit('closeModal') 
         }
     }
}
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
}


.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>