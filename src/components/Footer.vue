<template>
   <nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid text-center">
    <form class="container-fluid justify-content-center">
    <router-link class="btn   btn-footer" to="/listapokemones"><i class="fas fa-align-justify"></i>All</router-link>
    <router-link class="btn  btn-footer favorite" to="/favoritos" @click="addActive()" ><i class="fas fa-star"></i>Favorites</router-link>
    <router-view/>
  </form>
  </div>
</nav>
</template>

<script>
import {  ref } from "vue";
export default { 
  setup() {
    const active = ref(false)
    const addActive = () => {
         active.value = true 
       }
       return{addActive, active}
  },
};
</script>
<style scoped>
.btn-footer{
  margin-right: 15px;
  border-radius: 1.25rem;
  padding: 5px 80px;
  color: #fff;
  background-color: #BFBFBF;
  border-color: #BFBFBF;
}
.favorite i{
  color: #fff;
}
.router-link-exact-active{
  border-radius: 1.25rem;
  background-color: #F22539;
}

</style>