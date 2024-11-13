<template>
  <div class="text-red-600 mt-2 font-bold text-sm">{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    }
  }
}
</script>