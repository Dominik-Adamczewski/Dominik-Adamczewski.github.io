<template>
  <label>
    {{ label }}
    <textarea
      :rows="rows"
      class="message-box w-full p-2 rounded-lg"
      :placeholder="placeholder"
      @focus="clearErrorState"
      @blur="handleTextInput"
      :class="{ 'error-active': !isInputValid || isMissingField }"
      v-model="inputValue"
    ></textarea>
  </label>
  <span v-if="!isInputValid || isMissingField" class="error-msg">
      {{ errorMessage }}
  </span>
</template>

<script>
export default {
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
    missingFields: {
      type: Array,
      default: () => [],
    }
  },
   data() {
    return {
      isInputValid: true,
      inputValue: "",
      errorMessage: "This field is required"
    };
  },
  computed: {
    isMissingField() {
      if (this.missingFields.length) {
        return this.missingFields.includes(this.label);
      }
    }
  },
  methods: {
    clearErrorState() {
      this.isInputValid = true;
      this.$emit('clearMissingField', this.label);
    },
    validateTextInput() {
      if (this.inputValue === "") {
        this.isInputValid = false;
      } else {
        this.isInputValid = true;
      }
    },
    handleTextInput() {
      this.validateTextInput();
      if (this.isInputValid) {
        this.$emit("dataOk", {
          inputLabel: this.label,
        });
      }
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