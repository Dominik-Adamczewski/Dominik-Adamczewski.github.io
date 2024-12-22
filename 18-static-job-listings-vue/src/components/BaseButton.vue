<template>
  <div 
    class="text-center py-2 px-4 font-semibold text-gray-500 cursor-pointer border hover:underline rounded-md"
    :class="{ 'bg-proj-18-desaturated-dark-cyan text-white hover:no-underline hover:bg-proj-18-dark-grayish-cyan': isMainCTA }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    isMainCTA: {
      type: Boolean,
      default: false,
    },
  },
}
</script>