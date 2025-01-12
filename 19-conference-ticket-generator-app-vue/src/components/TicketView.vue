<template>
  <div class="image-container relative">
    <div class="absolute top-4 left-8">
      <div class="text-white flex items-start text-xl">
        <img 
          src="/images/logo-mark.svg" 
          alt="Coding conf logo" 
          class="w-8 h-8 mr-2"
        >
        <div>
          <div class="self-start leading-none">
            Coding Conf
          </div>
          <div class="text-white text-xs mt-2">
            Jan 31, 2025 / Austin, TX
          </div>
        </div>
      </div>
    </div>
    <div class="absolute left-8 bottom-4 flex items-center text-white">
      <img 
        :src="avatarUrl"
        alt="Avatar image preview"
        class="w-14 h-14 rounded-md mr-4"
      >
      <div>
        <span class="font-semibold">{{ fullName }}</span>
        <div class="flex items-center text-xs font-light">
          <img 
            src="/images/icon-github.svg" 
            alt="Github icon"
            class="mr-1 w-4 h-4"
          >
          {{ github }}
        </div>
      </div>
    </div>
    <div class="absolute top-12 right-8 text-white ticket-id">
      {{ randomTicketId }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

defineProps({
  avatarUrl: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const randomTicketId = ref(null);

function getRandomTicketId(length) {
  const randomId = [];
  for(let i = 0; i < length; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    randomId.push(randomDigit);
  }
  return `#${randomId.join('')}`;
}

onMounted(() => {
  randomTicketId.value = getRandomTicketId(5);
});

</script>

<style>
  .image-container {
    min-height: 160px;
    background-image: url('../../public/images/pattern-ticket.svg');
    background-repeat: no-repeat;
    background-size: calc(100% - 32px) auto;
    background-position: center center;
  }

  .ticket-id {
    writing-mode: vertical-lr;
  }
</style>