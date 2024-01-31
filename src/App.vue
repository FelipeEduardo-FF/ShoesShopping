<script setup lang="ts">
  import './assets/main.css'
  import BaseHeader from './components/BaseHeader.vue';
  import CardList from './components/CardList.vue';
  // import Drawer from './components/Drawer.vue';


</script>

<template>
  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
      <BaseHeader/>
      <!-- <Drawer/> -->
      <div class="p-10">
          <h2 class="text-3xl font-bold mb-8">Sneakers</h2>
          <CardList/>
      </div>
   

  </div> 
</template>

