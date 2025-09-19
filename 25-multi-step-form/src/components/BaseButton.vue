<template>
  <button
    :class="[baseClasses, buttonTypeClasses[props.type]]"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: () => '',
    required: true
  },
  type: {
    type: String,
    default: 'secondary',
    validator (value, props) {
      return ['submit', 'primary', 'secondary'].includes(value);
    }
  }
});

const baseClasses = 'rounded-md h-10 cursor-pointer';
const buttonTypeClasses = {
  submit: '',
  primary: 'border border-proj-25-primary-blue-950 bg-proj-25-primary-blue-950 text-white hover:bg-proj-25-primary-blue-950-hover hover:border-proj-25-primary-blue-950-hover px-4 focus-visible:ring-2 focus-visible:ring-proj-25-primary-blue-950 focus-visible:ring-offset-2',
  secondary: 'text-proj-25-grey-500 hover:text-proj-25-primary-blue-950'
};
</script>
<style scoped>
button:focus-visible {
  outline: solid black;
}
</style>
