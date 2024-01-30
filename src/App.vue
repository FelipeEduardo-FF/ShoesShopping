<script setup lang="ts">
import { onMounted } from "vue";
import Teste from "./Model/Teste";
import './assets/main.css'
import ApiClient from './services/HttpService';

onMounted(() => {
  const apiClient = new ApiClient(Teste);

  apiClient.Get();
})

</script>

<template>
  <div class="mb-20 text-slate-500">
    teste
  </div> 
</template>

