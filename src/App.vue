<script setup lang="ts">
import { onMounted } from "vue";
import Teste from "./Model/Teste";
import ApiClient from './services/HttpService';

onMounted(() => {
  const apiClient = new ApiClient(Teste);

  apiClient.Get();
})

</script>

<template>
  <div>
    teste
  </div>
</template>

