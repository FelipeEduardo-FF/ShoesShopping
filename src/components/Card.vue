<script setup>
import Sneakers from '../Model/Sneakers';



defineProps({
    item:Sneakers,
    onClickToggleFavorite:Function,
    onClickAdd:Function,
})



</script>

<template >

     <div class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2">
        <img @click="onClickToggleFavorite" :src="item.isFavorited ?'/like-2.svg':'/like-1.svg'" alt="Like 1" class="absolute top-8 left-8">
        <img :src="item.imageUrl?item.imageUrl:''" alt="Sneaker"/>

        <p class="mt-2">{{ item.title }}</p>

        <div class="flex justify-between mt-5">
            <div class="flex flex-col">
                <span class="text-slate-400">Preço </span>
                <b>R$ {{ item.price }} </b>
            </div>

            <img  @click="onClickAdd()" :src="!item.isAdded?'/plus.svg':'/checked.svg' " alt="Plus" />
        </div>
    </div>


</template>
