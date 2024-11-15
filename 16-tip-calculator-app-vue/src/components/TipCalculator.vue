<template>
  <div class="p-6 lg:flex lg:justify-between">
    <div class="lg:w-6/12">
      <TextInput
        inputType="number" 
        placeholder="0" 
        label="Bill" 
        :iconPath="iconPaths.dollarIcon" 
        v-model="values.bill" 
        :errors="allErrors.bill" 
      />
      <TipPercentageGrid @update:selectedOption="setPercentage" ref="tipPercentageGrid" :errors="allErrors.percentage" class="mb-4">
        <span>Select Tip %</span>
      </TipPercentageGrid>
      <TextInput
        inputType="number" 
        placeholder="0" 
        label="Number of people" 
        :iconPath="iconPaths.peopleIcon" 
        v-model="values.people" 
        :errors="allErrors.people" 
      />
    </div>
    <div class="lg:w-5/12">
      <SummaryBox :tipAmount="calculatedValuesPerPerson.tipAmount" :totalAmount="calculatedValuesPerPerson.totalAmount" @reset="resetCalculator" />
    </div>
  </div>
</template>

<script>
import TipPercentageGrid from './TipPercentageGrid.vue';
import TextInput from './TextInput.vue';
import SummaryBox from './SummaryBox.vue';
export default {
  components: {
    TextInput,
    TipPercentageGrid,
    SummaryBox
  },
  data() {
    return {
      values: {
        bill: null,
        people: null,
        percentage: null,
      },
      calculatedValuesPerPerson: {
        tipAmount: null,
        totalAmount: null,
      },
      iconPaths: {
        dollarIcon: require('@/assets/images/icon-dollar.svg'),
        peopleIcon: require('@/assets/images/icon-person.svg'),
      },
      isDirty: false,
      errors: {
        bill: [],
        people: [],
        percentage: [],
      },
      errorMessages: {
        textInputEmpty: "Can't be zero!",
        textInputInvalid: "Input must be an integer!",
        percentageEmpty: "Please, choose a tip percentage!",
      },
      numbersRegexPattern: /^\d+$/,
    }
  },
  methods: {
    setPercentage(value) {
      this.values.percentage = value;
    },
    updateInteractionFlag() {
      this.isDirty = true;
    },
    calculateAmounts() {
      if (this.values.bill || this.values.people || this.values.percentage) {
        this.updateInteractionFlag();
      }
      if (this.values.bill && this.values.people && this.values.percentage) {
        const tipAmount = this.values.bill * (this.values.percentage / 100);
        const tipAmountPerPerson = tipAmount / this.values.people;
        const totalAmount = this.values.bill + tipAmount;
        const totalAmountPerPerson = totalAmount / this.values.people;

        this.calculatedValuesPerPerson.tipAmount = tipAmountPerPerson;
        this.calculatedValuesPerPerson.totalAmount = totalAmountPerPerson;
      }
    },
    resetCalculator() {
      this.values.bill = null;
      this.values.people = null;
      this.values.percentage = null;
      this.$refs.tipPercentageGrid.resetPercentage(); // w ten sposób można wywoływać metody childów z parenta
      this.calculatedValuesPerPerson.tipAmount = null;
      this.calculatedValuesPerPerson.totalAmount = null;
      this.isDirty = false;
    },
    isInteger(value) {
      const regexPattern = /^\d+$/;
      return regexPattern.test(value);
    }
  },
  watch: {
    'values.bill': 'calculateAmounts',
    'values.people': 'calculateAmounts',
    'values.percentage': 'calculateAmounts'
  },
  computed: {
    billError() {
      if (!this.isDirty) return [];
      if (!this.values.bill) {
        return [this.errorMessages.textInputEmpty];
      }
      if (!this.isInteger(this.values.bill)) {
        return [this.errorMessages.textInputInvalid];
      }
    },
    peopleError() {
      if (!this.isDirty) return [];
      if (!this.values.people) {
        return [this.errorMessages.textInputEmpty];
      }
      if (!this.isInteger(this.values.people)) {
        return [this.errorMessages.textInputInvalid];
      }
    },
    percentageError() {
      if (!this.isDirty) return [];
      if (!this.values.percentage) {
        return [this.errorMessages.percentageEmpty];
      }
      if (!this.isInteger(this.values.percentage)) {
        return [this.errorMessages.textInputInvalid];
      }
    },
    allErrors() {
      return {
        bill: this.billError,
        people: this.peopleError,
        percentage: this.percentageError
      };
    }
}
}
</script>

<style>

</style>