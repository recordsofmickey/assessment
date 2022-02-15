<template>
    <div>
        <form action="" @submit.prevent>
            <input type="text" v-text="searchField" @input="updateSearchField">
        </form>    
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        searchField() {
            return this.$store.state.searchField;
        }
    },
    methods: {
        search() {
            
            this.emptySearchField;
            this.$emit('formFilled');
        },
        emptySearchField() {
            this.searchField = '';
        }, 
        updateSearchField(e) {
            this.$store.commit('updateSearchField', e.target.value);
        }
    }
}
</script>
<style scoped>
    input {
        width: 100%;
        height: 2rem;
        border: none;
        padding: 0.5rem;
    }

    form {
        display: flex;
    }

    button {
        background:none;
        color: inherit;
        border: none;
    }
</style>