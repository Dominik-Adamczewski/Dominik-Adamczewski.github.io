<template>
  <div 
    class="w-full h-16 rounded-md flex items-center justify-center text-2xl font-semibold custom-shadow"
    :class="keyClass"
    @click="handleKeyClick"
  >
    <input type="number" class="hidden" :value="props.keyLabel">
    {{ props.keyLabel }}
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue';
import { calcStore } from '../../stores/calcStore';

const store = calcStore();

const emit = defineEmits(['keyClick']);

const props = defineProps({
  keyLabel: String,
});

const handleKeyClick = () => {
  if (props.keyLabel === 'RESET') {
    store.resetCalculator();
  }

  if (props.keyLabel === 'DEL') {
    store.handleDelKey();
  }

  if (props.keyLabel === '=') {
    store.calculateExpression();
  }

  return emit('keyClick', props.keyLabel);
}

const keyClass = computed(() => {
  const theme = store.getCurrentTheme;

  if (props.keyLabel === 'RESET' || props.keyLabel === 'DEL') {
    return [
      `bg-${theme.keysClasses.actionKeysBackground}`,
      `shadow-${theme.keysClasses.actionKeysShadow}`,
      `text-${theme.textClasses.keyText}`,
    ];
  } else if (props.keyLabel === '=') {
    return [
      `bg-${theme.keysClasses.mainKeyBackground}`,
      `shadow-${theme.keysClasses.mainKeyShadow}`,
      `text-${theme.textClasses.keyText}`,
    ];
  } else {
    return [
      `bg-${theme.keysClasses.numericKeysBackground}`,
      `shadow-${theme.keysClasses.numericKeysShadow}`,
      `text-${theme.textClasses.keyText}`,
    ];
  }
});
</script>

<style>
  .custom-shadow {
    box-shadow: 0px 4px;
  }
</style>
