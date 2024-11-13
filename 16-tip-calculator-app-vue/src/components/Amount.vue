<template>
  <div class="w-full h-10 flex items-center justify-between">
    <div>
      <span class="text-white">{{  firstLineText  }}</span><br>
      <span class="text-gray-400">{{ secondLineText }}</span>
    </div>
    <div class="text-proj-16-strong-cyan text-3xl">
      {{ value ? value : '0.00' }}$
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstLineText: {
      type: String,
      required: true,
    },
    secondLineText: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: '0.00'
    }
  }
}
</script>

<style>

</style>