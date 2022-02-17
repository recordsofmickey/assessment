<template>
  <form action="" @submit.prevent="search">
    <input
      type="text"
      v-text="searchField"
      @input="updateSearchField"
      data-test="form"
    />
    <button @click="search" data-test="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    searchField() {
      return this.$store.state.searchField;
    },
  },
  methods: {
    search() {
      this.$router.push({ path: "/search/" });
      this.$store.commit("emptySearch");
      this.$store.dispatch("getSearchResults", this.searchField);
    },
    updateSearchField(e) {
      this.$store.commit("updateSearchField", e.target.value);
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  height: 2rem;
  border: none;
  padding: 0.5rem;
  border-bottom: 1px solid grey;
}

form {
  display: flex;
}

button {
  background: none;
  color: inherit;
  border: none;
}
</style>