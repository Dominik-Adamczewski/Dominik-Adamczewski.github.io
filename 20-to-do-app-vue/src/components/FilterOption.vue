<template>
    <span 
      class="cursor-pointer font-semibold text-sm px-4 py-1" 
      :class="{ 'text-proj-20-blue': isChosen, 'text-proj-20-dark-theme-dark-grayish-blue': !isChosen }"
      @click="changeFilter"
    >
      {{ text }}
    </span>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      isChosen: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      changeFilter() {
        this.$emit('change-filter', this.text);
      }
    }
  }
</script>

<style></style>
