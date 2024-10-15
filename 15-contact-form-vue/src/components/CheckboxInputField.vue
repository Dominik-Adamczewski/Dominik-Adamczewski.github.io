<template>
  <div class="mt-6">
    <label class="flex items-center">
      <input type="checkbox" :value="value" v-model="isChecked" @change="handleCheckboxClick" class="consent-checkbox cursor-pointer" />
      <span class="ml-2">{{ label }}</span>
      <span class="text-proj-15-green-600">*</span>
    </label>
  </div>
    <span v-if="isMissingField && !isChecked" class="error-msg">
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
    value: {
      type: String,
      required: true,
    },
    missingFields: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      isChecked: false,
      errorMessage: 'To submit this form, please consent to being contacted',
    }
  },
  computed: {
    isMissingField() {
      if (this.missingFields.length) {
        return this.missingFields.includes('contact-consent');
      }
    }
  },
  methods: {
    handleCheckboxClick() {
      if (this.isChecked) {
        this.$emit("dataOk", {
        inputType: 'checkbox',
        inputValue: this.isChecked,
        inputLabel: 'contact-consent',
      });
      }
    }
  }
}
</script>

<style>
.consent-checkbox {
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 2px;
  border: 1px solid grey;
}

.consent-checkbox:checked {
  background-color: hsl(169, 82%, 27%);
  border-color: hsl(169, 82%, 27%);
}

.consent-checkbox::before {
  content: '';
  width: 16px;
  height: 16px;
  background-color: white;
  clip-path: polygon(20% 55%, 45% 75%, 80% 25%, 85% 30%, 45% 80%, 15% 55%);
  transform: scale(0);
}

.consent-checkbox:checked::before {
  transform: scale(1);
}
</style>