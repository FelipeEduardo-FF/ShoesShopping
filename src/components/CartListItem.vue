<script setup>
import Sneakers from '../Model/Sneakers';
import CartItem from './CartItem.vue';
import { inject } from 'vue';

const { cart , removeFromCart } = inject('cartActions');
</script>
<template>
    <div class="flex flex-col gab-5 flex-1 justify-between">
        <CartItem :removeItem="()=> removeFromCart(item)" :item="item" v-for="(item) in cart" :key="item.id"></CartItem>
    </div>
</template>