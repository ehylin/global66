<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>

</template>

<script>


export default {

  setup() {
    
  },
}
</script>
<style >
  body{
    font-family: 'Lato', sans-serif;
  }
  .boton{
    border-radius: 1.25rem;
    background-color: #F22539;
  }
  a{
    color: #F22539;
    text-decoration: none;
  }
  a:hover{
    color: #F22539;
  }
</style>


