<template>
<div class="container">
  <div  class="mt-5">
     <div 
          v-for= "favoritesSelect in favoritesSelect" :key="favoritesSelect.name">
          <Favorite :favoritesSelect="favoritesSelect" />  
        </div>
    </div>
        <Footer />

</div>
</template>


<script>
import { useStore } from 'vuex'
import Favorite from '../components/Favorite.vue'
import Footer from '../components/Footer.vue'

export default { 
  components:{
      Favorite,
      Footer
  },
  setup(){
       const store = useStore()

        const favoritesSelect = store.state.favorites;

        return { favoritesSelect }
  }
};
</script>
