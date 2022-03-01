<template>
<div>

     

    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {{pokemones.name}}
        <span class="badge bg-primary rounded-pill">
            <button class="btn" @click="addFav(pokemones)"><i class="fas fa-star"></i></button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Detalle</button>
        </span>
      </li>
    </ul>
    </div> 
    <div class="modal-poke">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
     
    </div>
</template>

<script>
import { useStore } from 'vuex'


export default {
    props: ["pokemones", ],
    components:{
      
    },
   setup(){
       const store = useStore()
       const addFav = (pokemones) => {
           store.dispatch('addFavorite', pokemones)
            console.log(store.state.favorites )  
       }

       const favoritesSelect = store.state.favorites;

      

       return { addFav, favoritesSelect }
   }
   
}
</script>
