<template>
  <label>
    {{ label }}
    <textarea
      :rows="rows"
      class="message-box w-full p-2 rounded-lg resize-none"
      :placeholder="placeholder"
      @focus="$emit('focus')"
      :class="{ 'error-active': errors && errors.length > 0 }"
      :value="modelValue"
      @input="handleInput"
    ></textarea>
  </label>
  <span v-if="errors && errors.length > 0" class="error-msg">
      {{ errorMessage }}
  </span>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errors: {
      type: Array,
      required: false,
      default: [],
    },
    modelValue: {
      type: String,
      required: true,
    }
  },
   data() {
    return {
      isInputValid: true,
      inputValue: "",
      errorMessage: "This field is required"
    };
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  }  
};
</script>

<style>
.message-box {
  border: 1px solid hsl(169, 82%, 27%);
}
.message-box:focus {
  outline: 1px solid hsl(169, 83%, 16%);
}
.error-active {
  border: 1px solid red;
}
.error-msg {
  color: red;
  font-style: italic;
  font-size: 14px;
}
</style>