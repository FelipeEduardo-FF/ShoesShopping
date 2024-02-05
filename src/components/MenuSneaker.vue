<script setup  lang="ts">
import { onMounted, ref, watch, reactive,inject } from 'vue';
import Sneakers from '../Model/Sneakers';
import ApiClient from '../services/httpService';
import Favorites from '../Model/Favorites';
import sneakersRepository from '../repository/sneakerRepository'
import CardList from './CardList.vue';


const favoriresRepo = new ApiClient(Favorites);

const items = ref <Sneakers[]> ([]);

const filters = reactive({
    sortBy: '',
    searchQuery: ''
});

const fetchFavorites = async () => {
    try {

        const favorites = await favoriresRepo.Get();

        items.value = items.value.map(item => {
            const favorite = favorites.find(favorite => favorite.itemId == item.id);

            if (favorite) {
                item.favoriteId = favorite.itemId;
                item.isFavorited = true;
                return item;
            }

            return item;
        });

    } catch (error) {
        console.log(error);
    }
}

const toggleFavorite = async (item: Sneakers) => {
    try {


        if (!item.isFavorited) {
            item.isFavorited = !item.isFavorited;
            const newFavorite = new Favorites();
            newFavorite.itemId = item.id;

            const data = await favoriresRepo.Post(newFavorite)
            item.favoriteId = data.id

        }
        else {
            item.isFavorited = !item.isFavorited;
            if (item.favoriteId)
                favoriresRepo.Delete(item.favoriteId);

            item.favoriteId = null;

        }
    } catch (error) {
        console.log(error);
    }

}



const fetchItems = async () => {
    try {
        items.value = await sneakersRepository.get(filters.searchQuery, filters.sortBy);
    } catch (error) {
        console.log(error);
    }
}

const onChangedSelect = (event: any) => {
    filters.sortBy = event.target.value;
}

const onChangedInput = (event: any) => {
    filters.searchQuery = event.target.value;
}

defineExpose({ fetchItems ,fetchFavorites})

onMounted(async () => {
    await fetchItems();
    await fetchFavorites();
});

watch(() => filters.sortBy, async () => {
    await fetchItems();
    await fetchFavorites();
});

watch(() => filters.searchQuery, async () => {
    await fetchItems();
    await fetchFavorites();
});

const { toggleAddCart }: any = inject('cartActions');
</script>

<template >
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
          

    <CardList @addToCart="toggleAddCart"  @addFavorite="toggleFavorite" :items='items'/>
</template>
