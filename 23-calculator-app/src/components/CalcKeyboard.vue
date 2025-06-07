<template>
  <div
    class="rounded-lg grid grid-cols-4 grid-rows-4 gap-4 p-6"
    :class="`bg-${store.getCurrentTheme.backgroundClasses.keypadBackground}`"
  >
    <CalcKey
      v-for="(item, index) in store.keyLabels"
      :key="index"
      :key-label="item"
      :class="{
        'col-span-2 col-start-1': index === store.keyLabels.length - 2,
        'col-span-2 col-start-3': index === store.keyLabels.length - 1
      }"
      @keyClick="store.addDigitToCurrentExpression"
    />
  </div>
</template>

<script setup>
import { calcStore } from '../../stores/calcStore';
import CalcKey from './CalcKey.vue';

const store = calcStore();
console.log(store);
</script>

<style>

</style>
