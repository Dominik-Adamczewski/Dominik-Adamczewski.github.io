<template>
  <div class="h-full w-full p-6 lg:flex lg:justify-between">
    <div class="w-full lg:w-6/12">
      <TypeInput 
        inputType="number" 
        placeholder="0" 
        label="Bill" 
        :iconPath="iconPaths.dollarIcon" 
        v-model="values.billValue" 
        :errors="allErrors.bill" 
      />
      <TipPercentageGrid @update:selectedOption="updateSelectedPercentage" ref="tipPercentageGrid" :errors="allErrors.selectedPercentage">
        <span>Select Tip %</span>
      </TipPercentageGrid>
      <TypeInput 
        inputType="number" 
        placeholder="0" 
        label="Number of people" 
        :iconPath="iconPaths.peopleIcon" 
        v-model="values.numberOfPeopleValue" 
        :errors="allErrors.numberOfPeople" 
      />
    </div>
    <div class="w-full lg:w-5/12">
      <SummaryBox :tipAmount="calculatedValuesPerPerson.tipAmount" :totalAmount="calculatedValuesPerPerson.totalAmount">
        <div class="text-center px-4 pb-4 font-bold text-proj-16-very-dark-cyan">
          <button class="bg-proj-16-strong-cyan w-full h-10 rounded-md tracking-wider" @click="resetCalculator">RESET</button>
        </div>
      </SummaryBox>
    </div>
  </div>
</template>

<script>
import TipPercentageGrid from './TipPercentageGrid.vue';
import TypeInput from './TypeInput.vue';
import SummaryBox from './SummaryBox.vue';
export default {
  components: {
    TypeInput,
    TipPercentageGrid,
    SummaryBox
  },
  data() {
    return {
      values: {
        billValue: null,
        numberOfPeopleValue: null,
        selectedPercentage: null,
      },
      calculatedValuesPerPerson: {
        tipAmount: null,
        totalAmount: null,
      },
      iconPaths: {
        dollarIcon: require('@/assets/images/icon-dollar.svg'),
        peopleIcon: require('@/assets/images/icon-person.svg'),
      },
      haveUserInteractedWithForm: false,
      errors: {
        bill: [],
        numberOfPeople: [],
        selectedPercentage: [],
      },
      errorMessages: {
        typeInputEmpty: "Can't be zero!",
        typeInputInvalid: "Input must be an integer!",
        percentageEmpty: "Please, choose a tip percentage!",
      },
      numbersRegexPattern: /^\d+$/,
    }
  },
  methods: {
    updateSelectedPercentage(value) {
      this.values.selectedPercentage = value;
    },
    updateInteractionFlag() {
      this.haveUserInteractedWithForm = true;
    },
    calculateAmounts() {
      if (this.values.billValue || this.values.numberOfPeopleValue || this.values.selectedPercentage) {
        this.updateInteractionFlag();
      }
      if (this.values.billValue && this.values.numberOfPeopleValue && this.values.selectedPercentage) {
        const tipAmount = this.values.billValue * (this.values.selectedPercentage / 100);
        const tipAmountPerPerson = tipAmount / this.values.numberOfPeopleValue;
        const totalAmount = this.values.billValue + tipAmount;
        const totalAmountPerPerson = totalAmount / this.values.numberOfPeopleValue;

        this.calculatedValuesPerPerson.tipAmount = tipAmountPerPerson.toFixed(2);
        this.calculatedValuesPerPerson.totalAmount = totalAmountPerPerson.toFixed(2);
      }
    },
    resetCalculator() {
      this.values.billValue = null;
      this.values.numberOfPeopleValue = null;
      this.values.selectedPercentage = null;
      this.$refs.tipPercentageGrid.resetPercentage(); // w ten sposób można wywoływać metody childów z parenta
      this.calculatedValuesPerPerson.tipAmount = null;
      this.calculatedValuesPerPerson.totalAmount = null;
      this.haveUserInteractedWithForm = false;
    },
  },
  watch: {
    'values.billValue': 'calculateAmounts',
    'values.numberOfPeopleValue': 'calculateAmounts',
    'values.selectedPercentage': 'calculateAmounts'
  },
  computed: {
    billError() {
      if (!this.haveUserInteractedWithForm) return [];
      if (!this.values.billValue || this.values.billValue === 0) {
        return [this.errorMessages.typeInputEmpty];
      } else if (!this.numbersRegexPattern.test(this.values.billValue)) {
        return [this.errorMessages.typeInputInvalid];
      }
      return [];
    },
    peopleError() {
      if (!this.haveUserInteractedWithForm) return [];
      if (!this.values.numberOfPeopleValue || this.values.numberOfPeopleValue === 0) {
        return [this.errorMessages.typeInputEmpty];
      } else if (!this.numbersRegexPattern.test(this.values.numberOfPeopleValue)) {
        return [this.errorMessages.typeInputInvalid];
      }
      return [];
    },
    selectedPercentageError() {
      if (!this.haveUserInteractedWithForm) return [];
      if (!this.values.selectedPercentage || this.values.selectedPercentage === 0) {
        return [this.errorMessages.percentageEmpty];
      } else if (!this.numbersRegexPattern.test(this.values.selectedPercentage)) {
        return [this.errorMessages.typeInputInvalid];
      }
      return [];
    },
    allErrors() {
      return {
        bill: this.billError,
        numberOfPeople: this.peopleError,
        selectedPercentage: this.selectedPercentageError
      };
    }
}
}
</script>

<style>

</style>