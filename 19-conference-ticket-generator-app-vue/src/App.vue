<template>
  <div 
    class="
      bg-[url('../19-conference-ticket-generator-app-vue/public/images/background-mobile.png')] 
      lg:bg-[url('../19-conference-ticket-generator-app-vue/public/images/background-desktop.png')] 
      bg-cover 
      bg-center 
      min-h-screen
      pb-10"
  >
    <header class="p-4 flex items-center justify-center flex-col text-white relative">
      <img 
        src="/images/pattern-squiggly-line-top.svg" 
        class="absolute w-36 h-36 right-0 -top-4"
      >
      <div
        class="bg-[url('../19-conference-ticket-generator-app-vue/public/images/pattern-lines.svg')]"
      >
        <img 
          src="/images/logo-full.svg" 
          alt="Coding conf logo" 
          class="mb-10"
        >
        <h1 class="text-3xl text-center mb-6">
          <span v-if="isTicketReady">Congrats, tester tester! Your ticket is ready.</span>
          <span v-else>Your Journey to Coding Conf 2025 Starts Here!</span>
        </h1>
        <p class="text-lg text-center text-proj-19-neutral-300">
          <span v-if="isTicketReady">We've emailed your ticket to email@gmail.com and will send updates in the run up to the event.</span>
          <span v-else>Secure your spot at next year's biggest coding conference.</span>
        </p>
      </div>
    </header>
    <TicketView
      v-if="isTicketReady" 
      :full-name="fullName"
      :github="github"
      :avatar-url="avatarUrl"
      class="mt-12"
    />
    <TicketForm 
      v-else 
      @submit="handleTicketFormSubmit"
    />
    <img 
      src="/images/pattern-squiggly-line-bottom.svg" 
      class="absolute bottom-0 -left-8 z-0 h-80 w-80 pointer-events-none"
    >
  </div>
</template>

<script setup>
import TicketForm from './components/TicketForm.vue';
import TicketView from './components/TicketView.vue';
import { ref } from 'vue';

const isTicketReady = ref(false);
const fullName = ref(null);
const github = ref(null);
const avatarUrl = ref(null);

function handleTicketFormSubmit(data) {
  isTicketReady.value = true;
  fullName.value = data.fullName;
  github.value = data.github;
  avatarUrl.value = data.avatarUrl;
  console.log(avatarUrl.value);
}

</script>

<style>
</style>
