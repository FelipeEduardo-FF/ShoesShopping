<script setup lang="ts">
    import Card from './Card.vue';
    import Sneakers from '../Model/Sneakers.ts';

    defineProps({
        items: {
            type: Array as () => Sneakers[],
            default: () => [],
        },
    });

    const emit=defineEmits(['addFavorite']);


</script>


<template >
        <div class="grid grid-cols-4 gap-5">
            <Card 
                v-for="(item) in items" 
                :key="item.id"
                :item='item'
                :isAdded='false'
                :onClickAddFavorite="()=>  emit('addFavorite', item)" 
                >
            </Card>

        </div>
</template>