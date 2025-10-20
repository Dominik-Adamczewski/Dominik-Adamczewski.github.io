<template>
  <section class="flex items-center justify-between lg:max-w-3xl lg:mx-auto">
    <div>
      <GameCircle :circle-obj="store.userWeaponObj" :is-on-choosing-weapon-screen="false" />
      <p class="mt-3 text-white text-center">YOU PICKED</p>
    </div>
    <div>
      <GameCircle :is-empty="true" />
      <p class="mt-3 text-white text-center">THE HOUSE PICKED</p>
    </div>
  </section>
  <section class="flex items-center justify-center mt-20 text-white text-3xl">
    <p class="w-1/2 text-center" v-if="isEnemyThinking">
      Waiting for enemy's choice
      <span class="dots w-10"></span>
    </p>
  </section>
</template>

<script setup>
import GameCircle from './GameCircle.vue';
import { useGameStore } from '../../stores/gameStore';
import { ref, onMounted } from 'vue';

const store = useGameStore();

const isEnemyThinking = ref(false);

onMounted(() => {
  isEnemyThinking.value = true;
  setTimeout(() => {
    isEnemyThinking.value = false;
    store.assignWeaponToTheEnemy();
    store.moveToTheNextStep();
  }, 3000);
});
</script>

<style scoped>
  .dots::after {
    content: "...";
    display: inline-block;
    width: 2ch;
    text-align: left;
    animation: loading 1s infinite;
  }
  @keyframes loading {
      0%, 100% {
          content: "...";
      }
      25% {
          content: ".  ";
      }
      50% {
          content: ".. ";
      }
      75% {
          content: "...";
      }
  }
</style>
