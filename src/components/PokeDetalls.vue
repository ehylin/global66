<template>
<div class="detail">
    <div class="detail-wiew" >
    <div class="detail-img text-center">
        <img class="" width="200" :src="pokemonesDetalls.sprites.front_default" alt="imagen">
    </div>
    <div class="detail-content">
         <p>Name:{{pokemonesDetalls.name}}</p>
         <hr/>
         <p>Weight:{{pokemonesDetalls.weight}}</p>
         <hr/>
         <p>Height: {{pokemonesDetalls.height}}</p>
    </div>
    <div class="detail-footer">
         <button class="btn btn-danger boton " >Share to my friends</button> 
         <i class="fas fa-star"></i>
    </div>
    </div>
</div>

</template>


<script>
import {  ref } from "vue";
export default {
    props: ['pokemonesDetalls'],

      setup(){
           const show = ref(false)


            return{ show }
      }
     


}
</script>
<style scoped>
.detail{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 90px 10px 10px;
    width: 100%;
  
    background-color: rgb(2 0 1 / 25%);
    z-index: 2222;

}
.detail-wiew{
    display: flex;
    justify-content: center;
    
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 510px;
   
    background-color: #fff;
}
.detail-content, .detail-footer{
    padding: 20px;
}
.detail-img{
    background: url("../assets/fondo.png") no-repeat 
}
</style>
