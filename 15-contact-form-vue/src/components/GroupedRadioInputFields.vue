<template>
  <div class="mt-6">
    <label class="block mb-2">{{ label }}</label>
    <div class="block lg:flex lg:items-center lg:justify-between">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="my-2 p-4 bg-white rounded-lg w-full block cursor-pointer border border-proj-15-green-600 border-solid hover:bg-proj-15-green-400"
        :class="{ 'mr-4': index === 0 }"
      >
        <input type="radio" :value="option" :checked="modelValue === option" name="query-type" @change="updateValue(option)" class="peer-checked:bg-proj-15-green-600"  />
        <span class="ml-2">{{ option }}</span>
      </label>
    </div>
    <span v-if="errors && errors.length > 0" class="error-msg">
      {{ errors[0] }}
    </span>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
      default: [],
    },
    modelValue: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      selectedOption: null,
      errorMessage: 'Please select a query type',
    }
  },
  computed: {
    isMissingField() {
      if (this.missingFields.length) {
        return this.missingFields.includes(this.label);
      }
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>