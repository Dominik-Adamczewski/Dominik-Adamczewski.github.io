<template>
  <div class="flex items-center justify-between w-full">
    <span class="text-3xl font-bold" :class="`text-${store.getCurrentTheme.textClasses.screenText}`">calc</span>
    <CalcThemeSwitcher :themes="store.themes" />
  </div>
</template>

<script setup>
import CalcThemeSwitcher from './CalcThemeSwitcher.vue';
import { calcStore } from '../../stores/calcStore';

const store = calcStore();
</script>

<style>

</style>
