<template>
  <div class="mt-4 w-full">
    <label>{{ label }}</label>
    <input
      :type="inputType"
      class="single-input block w-full h-10 rounded-lg pl-2"
      :class="{ 'error-active': !isInputValid || isMissingField }"
      :placeholder="placeholder"
      @focus="clearErrorState"
      @change="handleTextInput"
      v-model="inputValue"
    />
    <span v-if="!isInputValid || isMissingField" class="error-msg">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
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
      errorMessage:
        this.inputType === "email"
          ? "Please enter a valid email address"
          : "This field is required",
      emailRegexPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
      } else if (
        this.inputType === "email" &&
        !this.emailRegexPattern.test(this.inputValue)
      ) {
        this.isInputValid = false;
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
  },
};
</script>

<style>
.single-input {
  border: 1px solid hsl(169, 82%, 27%);
}
.single-input:focus {
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