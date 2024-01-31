<script setup>
    import Card from './Card.vue';

    const onAddClick = () =>{
        alert(10);
    }
</script>

<template >
        <div class="grid grid-cols-4 gap-5">
            <Card 
                :isFavorite="false" 
                :isAdded="false" 
                :price="1000" 
                title="Tenis Verde" 
                imageUrl="/sneakers/sneakers-1.jpg"
                :onAddClick="onAddClick">
            </Card>

        </div>
</template>