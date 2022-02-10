<template>
    <div class="modal" @click="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h1>{{modalContent.name}}</h1>
            <p>{{modalContent.network.name}}</p>
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
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
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