<template lang="">
    <header class="flex justify-between border-b border-slate-300 px-10 py-8">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="logo" class="w-10 ">
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Snakers</h2>
          <p class="text-slate-400">Loja Snakers</p>
        </div>
      </div>
      <ul class="flex items-center gap-10">
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="/cart.svg" alt="Cart"/>
            <b> R$ 1205,00 </b>
          </li>
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="/heart.svg" alt="Favoritos"/>
            <span> Favoritos </span>
          </li>
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="/profile.svg" alt="User"/>
            <span> User </span>
          </li>
      </ul>
    </header>
</template>
