<script setup lang="ts">
  import Sneakers from './Model/Sneakers';
  import './assets/main.css'
  import BaseHeader from './components/BaseHeader.vue';
  import CardList from './components/CardList.vue';
  import ApiClient from './services/HttpService';
  import {onMounted, ref, watch, reactive } from 'vue';

  const items = ref<Sneakers[]>([]);
  
  const filters= reactive({
    sortBy:'',
    searchQuery:''
  });


  const onChangedSelect = (event:any)=>{
    filters.sortBy = event.target.value;
  }

  const onChangedInput = (event: any) => {
    filters.searchQuery = event.target.value;
  }

  const fetchItems = async () => {
    try {

      const sneakerrepo = new ApiClient(Sneakers);
      const parameter ={
        sortBy:filters.sortBy,
        searchQuery:filters.searchQuery
      }
      items.value = await sneakerrepo.Get(`?title=*${parameter.searchQuery}*&sortBy=${parameter.sortBy}`);
      
    } catch (error) {
      console.log(error);
    }
  }



  onMounted(fetchItems);
  watch(()=>filters.sortBy, fetchItems);
  watch(() => filters.searchQuery, fetchItems);
  
  
</script>

<template>
  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
      <BaseHeader/>
      <!-- <Drawer/> -->
      <div class="p-10">

          <div class="flex justify-between items-center">
              <h2 class="text-3xl font-bold mb-8">Sneakers</h2>

              <div class="flex gap-4">
                  <select @change="onChangedSelect" class="py-2 px-3 border rounded outline-none" name="" id="">
                    <option value="title">Nome</option>
                    <option value="price">Preço(Menor)</option>
                    <option value="-price">Preço(Maior)</option>
                   
                  </select>
                  <div class="relative">
                    <img class="absolute left-4 top-2.5" src="/search.svg" alt="search"/>
                    <input @input="onChangedInput" class="border border-gray-200 rounded py-1.5 pl-11 pr-4 outline-none focus:border-gray-400" type="text" placeholder="Buscar"/>
                  </div>
              </div>
          </div>
          


          <CardList :items="items"/>
      </div>
   

  </div> 
</template>

