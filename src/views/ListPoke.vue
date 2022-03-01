<template>
  <div class="container">
        <div class="row">
            <div class="col-md-12">
             
              
              <PokeList />
              <Footer />
            </div>
        </div>
</div>
</template>


<script>
import PokeList from '../components/PokeList.vue'
import Footer from '../components/Footer.vue'


export default {
name: 'ListPoke',
  components: {
    PokeList,
    Footer,

  }
}
</script>