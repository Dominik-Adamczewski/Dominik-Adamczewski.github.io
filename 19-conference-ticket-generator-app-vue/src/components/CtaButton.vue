<template>
  <button 
    :class="buttonCustomClass"
    class="rounded-md bg-proj-19-orange-500 text-proj-19-neutral-900"
  >
    <slot></slot>
  </button>
</template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    buttonHeight: {
      type: String,
      default: 'big',
      validator(value) {
      return ['big', 'medium', 'small'].includes(value);
    }
    },
    buttonWidth: {
      type: String,
      default: 'full',
      validator(value) {
      return ['full', 'threeQuarters', 'half', 'quarter', 'initial'].includes(value);
    }
    }
  });
  
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
    const heightClass = heightClassMap[props.buttonHeight] || heightClassMap.big;
    const widthClass = widthClassMap[props.buttonWidth] || widthClassMap.full;
  
    return `${heightClass} ${widthClass}`;
  });
  </script>
  
  <style>
  
  </style>