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

          <div class="flex justify-between items-center">
              <h2 class="text-3xl font-bold mb-8">Sneakers</h2>

              <div class="flex gap-4">
                  <select class="py-2 px-3 border rounded outline-none" name="" id="">
                    <option value="">Nome</option>
                    <option value="">Nome</option>
                  </select>
                  <div class="relative">
                    <img class="absolute left-4 top-2.5" src="/search.svg" alt="search"/>
                    <input class="border border-gray-200 rounded py-1.5 pl-11 pr-4 outline-none focus:border-gray-400" type="text" placeholder="Buscar"/>
                  </div>
              </div>
          </div>
          


          <CardList/>
      </div>
   

  </div> 
</template>

