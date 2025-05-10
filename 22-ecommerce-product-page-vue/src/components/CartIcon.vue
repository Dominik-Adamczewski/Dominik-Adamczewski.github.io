<template>
  <div class="relative">
    <img src="/images/icon-cart.svg" alt="Cart icon" class="w-5 h-5 mr-6 cursor-pointer">
    <div 
      v-if="store.cartItems.length > 0"
      class="absolute text-xs text-white font-semibold bg-proj-22-orange w-5 h-4 flex items-center justify-center rounded-lg -top-2 left-2"
    >
      1
    </div>
  </div>
</template>

<script setup>
import { eCommerceStore } from '../../stores/eCommerceStore';

const store = eCommerceStore();
</script>

<style>

</style>
