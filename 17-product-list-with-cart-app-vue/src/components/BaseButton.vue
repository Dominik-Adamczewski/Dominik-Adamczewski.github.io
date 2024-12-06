<template>
  <button class="p-4 bg-proj-17-red text-white w-full rounded-xl font-semibold">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>