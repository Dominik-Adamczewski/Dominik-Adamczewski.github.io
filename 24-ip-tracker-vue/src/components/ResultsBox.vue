<template>
  <section
    v-if="ipDataResults?.length > 0"
    class="border min-h-40 h-full md:h-auto md:w-full md:max-w-5xl rounded-md bg-white p-4 text-center md:flex md:items-center md:flex-1 md:text-left"
  >
    <div
      v-for="(idDataResult, index) in ipDataResults"
      :key="index"
      class="mb-4 md:mb-0 px-4 md:pr-8"
      :class="{ 'md:border-r': index !== ipDataResults.length - 1 }"
    >
      <div class="text-gray-500 font-semibold text-xs md:mb-2">{{ idDataResult.label }}</div>
      <span class="font-bold text-xl md:text-2xl">{{ idDataResult.data }}</span>
    </div>
  </section>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  ipDataResults: Array
});

</script>

<style scoped>

</style>
