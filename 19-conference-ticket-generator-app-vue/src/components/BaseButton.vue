<template>
  <button 
    :class="buttonCustomClass"
    class="rounded-md"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    default: 'orange',
  },
  textColor: {
    type: String,
    default: 'neutral',
  },
  buttonHeight: {
    type: String,
    default: 'big',
  },
  buttonWidth: {
    type: String,
    default: 'full',
  }
});

const bgColorClassMap = {
  orange: 'bg-proj-19-orange-500',
  transparent: 'bg-transparent',
  lightGray: 'bg-proj-19-neutral-500'
}

const textColorClassMap = {
  neutral: 'text-proj-19-neutral-900',
  white: 'text-white'
}

const heightClassMap = {
  big: 'h-12',
  medium: 'h-6',
  small: 'h-4'
}

const widthClassMap = {
  full: 'w-full',
  threeQuarters: 'w-3/4',
  half: 'w-1/2',
  quarter: 'w-1/4',
  initial: 'w-auto',
}

const buttonCustomClass = computed(() => {
  const bgClass = bgColorClassMap[props.backgroundColor] || bgColorClassMap.orange;
  const textClass = textColorClassMap[props.textColor] || textColorClassMap.neutral;
  const heightClass = heightClassMap[props.buttonHeight] || heightClassMap.big;
  const widthClass = widthClassMap[props.buttonWidth] || widthClassMap.full;

  return `${bgClass} ${textClass} ${heightClass} ${widthClass}`;
});
</script>

<style>

</style>