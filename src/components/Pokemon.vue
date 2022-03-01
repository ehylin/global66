<template>
<div class="">
    
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" @click="detalls(pokemones.name)" >
        {{pokemones.name}}
       <span class="favorite badge  ">
            <button class="btn ico-favorite" @click="addFav(pokemones)"><i class="fas fa-star"></i></button>
        </span> 
      </li>
     </ul>

     <PokeDetalls v-if="showDetail" :pokemonesDetalls="pokemonesDetalls"  @close="showDetail = false" />
 
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from "vue";
import PokeDetalls from './PokeDetalls.vue'


export default {
    props: ["pokemones", ],
    components:{
      PokeDetalls
    },
   setup(){
      const showDetail = ref(false)
       const store = useStore()
       const addFav = (pokemones) => {
           store.dispatch('addFavorite', pokemones)
            console.log(store.state.favorites )  
       }

       const favoritesSelect = store.state.favorites;

       const pokemonesDetalls = computed(() => {
            return  store.state.PokemonesDetalls;
        });
        
        const detalls = async (name) => {
          console.log(name)
         
           await store.dispatch('getPokemonesDetalls', name)
             showDetail.value = true
            console.log(store.state.PokemonesDetalls )  
       }

    

       return { addFav, favoritesSelect,pokemonesDetalls, detalls, showDetail }
   }
   
}
</script>
<style scoped>
.favorite{
  border-radius: 50%;
  background-color: #F5F5F5;
}
.ico-favorite{
   font-size: 20px;
  color: #BFBFBF;
}

</style>