<template>
<div class="">
    
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"  >
        {{pokemones.name}}
       <span class="badge bg-primary rounded-pill">
            <button class="btn" @click="addFav(pokemones)"><i class="fas fa-star"></i></button> /
            <button class="btn" @click="detalls(pokemones.name)" ><i class="fas fa-star"></i></button>
        </span> 
      </li>
     </ul>

     <PokeDetalls v-if="showDetail" :pokemonesDetalls="pokemonesDetalls" @closeDetail="closeDetail" />
 

   
    <!-- <div class="modal-poke" >
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header text-center">
                 <img class="" :src="pokemonesDetalls.sprites.front_default" alt="imagen">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <p class="modal-title" id="exampleModalLabel">Nombre:{{pokemonesDetalls.name}}</p>
                <p class="modal-title" id="exampleModalLabel">Weight:{{pokemonesDetalls.weight}}</p>
                 <p class="modal-title" id="exampleModalLabel">Height:{{pokemonesDetalls.height}}</p>
                  <p class="modal-title" id="exampleModalLabel">Types:{{pokemonesDetalls.types.type}}</p> 
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Share to my friends</button>
                  <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
     </div> -->


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

       const closeDetail = () =>{
         store.state.PokemonesDetalls = '';
         showDetail.value = false

       }

       return { addFav, favoritesSelect,pokemonesDetalls,detalls, showDetail, closeDetail }
   }
   
}
</script>
