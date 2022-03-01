<template>
   <div>
       <transition name="modal-animation">
           <div v-show="modalActive" class="modal">
               <transition name="modal-animation-inner">
                   
                   <div v-show="modalActive" class="modal-inner">
                   <i class="far fa-times-circle"></i>
                   <h2>modal</h2>
                   <slot />
                   <button>close</button>
                   </div> 
               </transition>
           </div>
       </transition>
    
    </div>
</template>
<script>


export default {
    props: ['modalActive']

}
</script>
