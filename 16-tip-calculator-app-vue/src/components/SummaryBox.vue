<template>
  <div class="w-full h-full bg-proj-16-very-dark-cyan min-h-60 rounded-md flex flex-col justify-between">
    <div class="pt-4 px-4">
      <Amount firstLineText="Tip Amount" secondLineText="/ person" :value="tipAmount"/>
      <Amount firstLineText="Total" secondLineText="/ person" class="mt-8" :value="totalAmount"/>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Amount from './Amount.vue';
export default {
  components: { Amount },
  props: {
    tipAmount: {
      type: Number,
      required: false,
    },
    totalAmount: {
      type: Number,
      required: false,
    }
  }
}
</script>

<style>

</style>