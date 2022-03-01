<template>
   <nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid text-center">
    <form class="container-fluid justify-content-center">
    <router-link class="btn btn-danger boton" to="/listapokemones"><i class="fas fa-align-justify"></i>All</router-link>
    <router-link class="btn btn-danger boton" to="/favoritos"><i class="fas fa-star"></i>Favorites</router-link>
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