<template>
<div class="detail">
    <div class="detail-wiew" >
        
    <div class="detail-img text-center">
        <img class="" width="200" :src="pokemonesDetalls.sprites.front_default" alt="imagen">
        <button type="button" class="btn-close close-detalls" @click="$emit('close')"  ></button>
    </div>
    <div class="detail-content">
        <div class="property">
            <h4 class="left">Name:</h4>
            <p class="right">{{pokemonesDetalls.name}}</p>
        </div>

        <div class="property">
            <h4 class="left">Weight:</h4>
            <p class="right">{{pokemonesDetalls.weight}}</p>
        </div>
 
        <div class="property">
            <h4 class="left">Height:</h4>
            <p class="right">{{pokemonesDetalls.height}}</p>
        </div>
        <div class="property types">
            <h4 class="left">Types:</h4>
            <div class="types-detalls"
                v-for= "pokemon in pokemonesDetalls.types" :key="pokemon.name"
                > 
                {{pokemon.type.name}}
            </div>
        </div>
        
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
    emits: ['close'],

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
.detail-footer i{
    float: right;
    font-size: 31px;
    color: #ECA539;
}
.property{
    border-bottom: 1px solid #ccc; 
    margin-top: 10px;
      
}
.left{
    font-size: 20px;
    float: left ;
    margin-right: 10px;
}
.types{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.types-detalls{
    margin: 0 10px 10px 0;
}
.close-detalls{
    position: absolute;
    right: 0;
}
</style>
