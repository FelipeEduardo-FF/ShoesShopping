
<script setup>
    import CartItem from './CartItem.vue';
import CartListItem from './CartListItem.vue';
    import DrawerHeader from './DrawerHeader.vue';


</script>
<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70">    
    </div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
        <DrawerHeader></DrawerHeader>
        <CartListItem></CartListItem>

        <div class="flex flex-col gap-4 mt-7">
            <div class="flex gap-2 items-end">
                <span>Total: </span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>R$ 12900,00 </b>
            </div>
            <div class="flex gap-2 items-end">
                <span>Desconto 5%: </span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>R$ 900,00 </b>
            </div>
            <button disabled="" class="mt-4 disabled:bg-slate-300 transition bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 active:bg-lime-700 cursor-pointer">
                Finalizar
            </button>
        </div>

    </div>
</template>