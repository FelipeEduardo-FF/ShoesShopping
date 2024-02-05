<script setup lang="ts">


  import './assets/main.css'
  import { ref, provide, computed } from 'vue';
  import MenuSneaker from './components/MenuSneaker.vue';

  import Drawer from './components/Drawer.vue';
  import BaseHeader from './components/BaseHeader.vue';
  import Sneakers from './Model/Sneakers';
  import Order from './Model/Order';
  import ApiClient from './services/httpService';

  const menuSneakerRef= ref();

  const drawerOpen= ref(false);
  const isCreatingOrder= ref(false);
  const cart = ref<Sneakers[]>([]);

  const closeDrawer= ()=> {
    drawerOpen.value = false;
  }

  const openDrawer = () => {
    drawerOpen.value = true;
  }

  const addToCart = (item: Sneakers) => {
      cart.value.push(item);
      item.isAdded=true;
  }

  const removeFromCart = (item: Sneakers) => {
    cart.value.splice(cart.value.indexOf(item),1);
    item.isAdded = false;
  }


  const totalPrice = computed<number>(()=>  cart.value.reduce((acc, item) => acc + item.price, 0));

  const vatPrice = computed(() => {
    return  Math.round((totalPrice.value*5) / 100);
  });
  

  const toggleAddCart = (item:Sneakers)=>{
    
     if(!item.isAdded){
      addToCart(item)
    }
    else{
      removeFromCart(item);
    }
  }
  
  
  const createOrder= async () =>{
    try {
      isCreatingOrder.value=true;

      const orderRepository = new ApiClient(Order);
      const newOrder= new Order();
      newOrder.items=cart.value;
      newOrder.totalPrice=totalPrice.value;
    
      const data = await orderRepository.Post(newOrder);
      cart.value=[];
      menuSneakerRef.value.fetchItems();
      menuSneakerRef.value.fetchFavorites();
      
      return data;
    } catch (error) {
      console.log(error);
    }
    finally{
      isCreatingOrder.value=false;
    }
  }


  const buttonDisabled = computed(() => 
    isCreatingOrder.value ? true : totalPrice.value ? false : true
  );


  provide('cartActions',
  {
    cart,
    openDrawer,
    closeDrawer,
    toggleAddCart,
    removeFromCart
  })



</script>

<template>
  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
      <BaseHeader :totalPrice="totalPrice" @openDrawer="openDrawer"/>
      <Drawer :buttonDisabled="buttonDisabled" @createOrder="createOrder"  :totalPrice="totalPrice" :vatPrice="vatPrice" v-if="drawerOpen"/>
      <div class="p-10">

        <MenuSneaker ref="menuSneakerRef"></MenuSneaker>
      </div>
   

  </div> 
</template>

