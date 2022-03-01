<template>
    <div> 
         <Loading v-if="loading"/>  
         <div v-else>
            <Search />
            <EmptyList v-if="pokemones.length=== 0"/>
            <div 
            v-for= "pokemones in pokemones" :key="pokemones.name">
                <Pokemon :pokemones="pokemones" />
            
            </div>
        </div>
    </div>
</template>

<script>
import Pokemon from "./Pokemon.vue"
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex"
import Loading from './Loading.vue'
import Search from './Search.vue'
import EmptyList from './EmptyList.vue'


export default {
    components:{
        Pokemon, 
        Loading,
        Search,
        EmptyList
    },
    setup() {
        const loading = ref(false)
        const store = useStore();

        const pokemones = computed(() => {
            return  store.state.pokemonesFilter;
        });
       
         onMounted(async() =>{
             loading.value = true
                await store.dispatch("getPokemones"); 
            loading.value = false
              
        });

        
        const favorites = computed(() => store.state.favorites);

        return { pokemones, favorites, loading};
    },
};
</script>
