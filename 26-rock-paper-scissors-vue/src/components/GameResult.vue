<template>
  <section class="text-center mt-20">
    <div class="text-white text-4xl lg:text-6xl font-semibold mb-6">
      <span v-if="store.gameResult === 'userWon'">YOU WON!</span>
      <span v-else-if="store.gameResult === 'enemyWon'">YOU LOST!</span>
      <span v-else>DRAW :| Try again</span>
    </div>
    <BaseButton text="PLAY AGAIN" @click="store.resetTheGame" />
  </section>
</template>

<script setup>
import { useGameStore } from '../../stores/gameStore';
import BaseButton from './BaseButton.vue';

const store = useGameStore();
</script>

<style scoped>
</style>
