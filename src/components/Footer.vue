<template>
   <nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid text-center">
    <form class="container-fluid justify-content-start">
    <router-link class="btn btn-danger text-center" to="/listapokemones">Todos</router-link>
    <router-link class="btn btn-danger text-center" to="/favoritos">Favoritos</router-link>
    <router-view/>
  </form>
  </div>
</nav>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default { 
  setup() {
    const search = ref('');
    const store = useStore();

     const processInput = () => {
      store.dispatch('filterName', search.value);
    };
    return{ search, processInput };
  },
};
</script>