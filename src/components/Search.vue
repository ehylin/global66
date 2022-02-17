<template>
    <div>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
        @keyup="processInput"
      />
    </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Search',
  
  setup() {
    const search = ref('');
    const store = useStore();

     const processInput = () => {
      //console.log(search.value);
      store.dispatch("filterName", search.value);
    };
    return{ search, processInput };
  },
};
</script>
