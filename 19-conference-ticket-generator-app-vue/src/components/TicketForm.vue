<template>
  <form class="mx-6 z-10">
    <BaseUpload 
      label="Upload avatar" 
      @upload="handleFileUpload"
    />
    <BaseInput 
      v-model="fullName"
      label="Full name"
      placeholder="Enter your full name"
      :errors="errors.fullName"
      @blur="validateFullNameInputField"
      @input="clearErrors('fullName')"
    />
    <EmailInput 
      v-model="email"
      label="Email address"
      placeholder="example@email.com"
      :errors="errors.email"
      @blur="validateEmailInputField"
      @input="clearErrors('email')"
    />
    <BaseInput 
      v-model="github"
      label="GitHub Username" 
      placeholder="@yourusername" 
      :errors="errors.github"
      @blur="validateGithubInputField"
      @input="clearErrors('github')"
    />
    <div class="text-center mt-6">
      <BaseButton 
        text="Generate My Ticket" 
        class="font-semibold"
        @click.prevent="validateForm"
      />
    </div>
  </form>
</template>

<script setup>
import BaseInput from './BaseInput.vue';
import EmailInput from './EmailInput.vue';
import BaseButton from './BaseButton.vue';
import BaseUpload from './BaseUpload.vue';
import { validateInputField } from '../composables/validate.js';
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit']);

const fullName = ref('');
const email = ref('');
const github = ref('');
const avatarUrl = ref('');
const errors = ref({
  fullName: [],
  email: [],
  github: [],
});

function handleFileUpload(data) {
  avatarUrl.value = data.imagePreview;
}

function validateFullNameInputField() {
  errors.value.fullName = validateInputField('text', fullName.value);
}

function validateEmailInputField() {
  errors.value.email = validateInputField('email', email.value);
}

function validateGithubInputField() {
  errors.value.github = validateInputField('github', github.value);
}

function clearErrors(inputType) {
  errors.value[inputType] = [];
} 

function validateForm() {
  validateFullNameInputField();
  validateEmailInputField();
  validateGithubInputField();
  if (errors.value.fullName.length < 1 && errors.value.email.length < 1 && errors.value.github.length < 1) {
    emit('submit', { fullName: fullName.value, github: github.value, avatarUrl: avatarUrl.value });
  }
}
</script>

<style>

</style>