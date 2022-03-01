<template>
    <div>   
         <div 
         v-for= "pokemones in pokemones" :key="pokemones.name">
            <Pokemon :pokemones="pokemones" />
           
        </div>

    </div>
</template>

<script>
import Pokemon from "./Pokemon.vue"
import { computed, onMounted } from "vue";
import { useStore } from "vuex"


export default {
    components:{
        Pokemon, 
    },
    setup() {
        const store = useStore();

        const pokemones = computed(() => {
            return  store.state.pokemonesFilter;
        });
         onMounted(async() =>{
           await store.dispatch("getPokemones"); 
              
        });
        const favorites = computed(() => store.state.favorites);

      


        return { pokemones, favorites, };
    },
};
</script>
