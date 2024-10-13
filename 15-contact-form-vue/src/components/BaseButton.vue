<template>
  <div class="mt-6">
    <button
      class="w-full p-4 rounded-lg text-slate-200 tracking-widest base-button"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.base-button {
  background-color: hsl(169, 82%, 27%);
}
</style>