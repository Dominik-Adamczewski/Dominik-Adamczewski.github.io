<template>
  <div 
    class="w-full h-24 rounded-lg flex items-center justify-end p-6" 
    :class="`bg-${store.getCurrentTheme.backgroundClasses.screenBackground} text-${store.getCurrentTheme.textClasses.screenText}`"
  >
    <span class="text-4xl font-semibold">{{ store.screenDisplay }}</span>
  </div>
</template>

<script setup>
import { calcStore } from '../../stores/calcStore';

const store = calcStore();
console.log(store);
</script>

<style>

</style>
