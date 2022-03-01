<template>
<div>
    <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{pokemones.name}}
    <span class="badge bg-primary rounded-pill">
        <button class="btn" @click="addFav(pokemones)">favorito icono estrella\\</button>
         <button class="btn btn-dark" >Detalle</button>
    </span>
  </li>
    </ul>
</div>
    
</template>

<script>
import { useStore } from 'vuex'

export default {
    props: ["pokemones"],
   setup(){
       const store = useStore()
       const addFav = (pokemones) => {
           store.dispatch('addFavorite', pokemones)
       }

       return { addFav }
   }
   
}
</script>
