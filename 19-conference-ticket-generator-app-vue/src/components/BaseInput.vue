<template>
  <label class="text-white mt-6 block">
    {{ label }}
    <input 
      v-model="model"
      type="text" 
      class="block w-full rounded-md h-12 bg-transparent border border-slate-400 focus-visible:outline-slate-600 px-2 mt-2"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      @input="$emit('input')"
    >
  </label>
  <div 
    v-if="errors && errors.length > 0"
    class="text-red-700 flex items-center mt-1"
  >
    <img 
      src="/images/icon-info-error.svg" 
      alt="Info icon"
      class="mr-1"
    >
    <span class="mt-0.5">{{ errors[0] }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineModel } from 'vue';

const model = defineModel();

defineProps({
  label: String,
  placeholder: String,
  errors: Array,
  modelValue: String,
});

defineEmits(['update:modelValue', 'blur', 'input']);

</script>

<style>

</style>