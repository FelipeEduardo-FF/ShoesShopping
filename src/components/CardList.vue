<script setup lang="ts">
    import Card from './Card.vue';
    import Sneakers from '../Model/Sneakers.ts';

    defineProps({
        items: {
            type: Array as () => Sneakers[],
            default: () => [],
        },
    });

    const onAddClick = () => {
        alert(10);
    };
</script>


<template >
        <div class="grid grid-cols-4 gap-5">
            <Card 
                v-for="(item) in items" 
                :key="item.id"
                :isFavorite="false" 
                :isAdded="false" 
                :item="item"
                :onAddClick="onAddClick">
            </Card>

        </div>
</template>