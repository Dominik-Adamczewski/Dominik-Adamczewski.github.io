<template>
  <div class="mt-6">
    <label class="block mb-2">{{ label }}</label>
    <div class="lg:flex lg:items-center lg:justify-between">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="radio-container my-2 p-4 bg-white rounded-lg w-full"
        :class="{ 'mr-4': index === 0 }"
      >
        <input type="radio" :value="option" name="query-type" v-model="selectedOption" @click="handleRadioButtonClick"  />
        {{ option }}
      </div>
    </div>
     <span v-if="isMissingField && !selectedOption" class="error-msg">
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
    options: {
      type: Array,
      required: true,
    },
    missingFields: {
      type: Array,
      default: () => [],
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
    handleRadioButtonClick() {
      this.$emit("dataOk", {
        inputLabel: this.label,
      });
    }
  }
};
</script>

<style>
.radio-container {
  border: 1px solid hsl(169, 82%, 27%);
}
</style>