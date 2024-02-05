<script setup>
import Sneakers from '../Model/Sneakers';

defineProps({
     item: Sneakers,
     removeItem:Function
})

</script>



<template>
    <div class="relative flex w-full border border-slate-100 rounded-xl p-4 gap-4 mt-4">
        <img class="w-16 h-16" :src="item.imageUrl" alt="Sneaker"/>

        <div class="flex flex-col w-full">
            <p>{{ item.title}}</p>

            <div class="flex justify-between mt-5">
                <b>R$ {{ item.price }}</b>
                <img @click="removeItem" class="cursor-pointer opacity-30 hover:opacity-100 transition" src="/close.svg" >
            </div>
        </div>
    </div>
</template>