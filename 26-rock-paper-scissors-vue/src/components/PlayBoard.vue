<template>
  <section>
    <StepOne v-if="store.currentStep === 1" />
    <StepTwo v-if="store.currentStep === 2" />
    <StepThree v-if="store.currentStep === 3" />
  </section>
</template>

<script setup>
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import { useGameStore } from '../../stores/gameStore';

const store = useGameStore();
</script>

<style scoped>
</style>
