<template>
<div>
    <Search />
    <PokeList />
</div>
</template>


<script>
import PokeList from '../components/PokeList.vue'
import Search from '../components/Search.vue'

export default {
name: 'ListPoke',
  components: {
    PokeList,
    Search
  }
}
</script>