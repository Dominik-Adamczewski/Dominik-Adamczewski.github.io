<template>
  <form class="p-4 lg:p-8 w-full lg:w-4/6 max-w-4xl bg-white rounded-lg" @submit.prevent="submitForm" novalidate>
    <h1 class="text-2xl lg:text-3xl font-bold">Contact us</h1>
    <div class="lg:flex lg:items-center lg:justify-between">
      <SingleInputField
        label="First Name"
        inputType="text"
        class="mr-4"
        placeholder="e.g. John"
        @dataOk="collectData"
        :missingFields="missingFields"
        @clearMissingField="removeMissingFieldErrorState"
      />
      <SingleInputField
        label="Last Name"
        inputType="text"
        placeholder="e.g. Sunderland"
        @dataOk="collectData"
        :missingFields="missingFields"
        @clearMissingField="removeMissingFieldErrorState"
      />
    </div>
    <SingleInputField
      label="Email address"
      inputType="email"
      placeholder="e.g. j.sunderland@gmail.com"
      @dataOk="collectData"
      :missingFields="missingFields"
      @clearMissingField="removeMissingFieldErrorState"
    />
    <GroupedRadioInputFields
      label="Query Type"
      :options="radioInputOptions"
      @dataOk="collectData"
      :missingFields="missingFields"
    />
    <MessageBox
      label="Message"
      rows="6"
      placeholder="How can we assist you? Please provide as much detail as possible."
      @dataOk="collectData"
      :missingFields="missingFields"
      @clearMissingField="removeMissingFieldErrorState"
    />
    <CheckboxInputField label="I consent to being contacted by the team" value="consent-info-true" @dataOk="collectData" :missingFields="missingFields" />   
    <BaseButton>Submit</BaseButton>
  </form>
</template>

<script>
import GroupedRadioInputFields from "./GroupedRadioInputFields.vue";
import SingleInputField from "./SingleInputField.vue";
import MessageBox from "./MessageBox.vue";
import BaseButton from "./BaseButton.vue";
import CheckboxInputField from "./CheckboxInputField.vue";
export default {
  components: {
    SingleInputField,
    GroupedRadioInputFields,
    MessageBox,
    BaseButton,
    CheckboxInputField,
  },
  data() {
    return {
      radioInputOptions: ['General Enquiry', 'Support Request'],
      requiredDataTypes: ['First Name', 'Last Name', 'Email address', 'Query Type', 'Message', 'contact-consent'],
      inputsData: [],
      missingFields: [],
    }
  },
  methods: {
    collectData(data) {
      if (this.inputsData.some(inputData => inputData.inputLabel === data.inputLabel)) {
        const dataObjIndex = this.inputsData.findIndex(inputData => inputData.inputLabel === data.inputLabel);
        this.inputsData[dataObjIndex] = data;
      } else {
        this.inputsData.push(data);
      }
    },
    getMissingFields() {
      return this.requiredDataTypes.filter(requiredField => {
        return !this.inputsData.some(inputData => inputData.inputLabel === requiredField);
      });
    },
    removeMissingFieldErrorState(fieldLabel) {
      this.missingFields = this.missingFields.filter(field => field !== fieldLabel);
    },
    submitForm(e) {
      e.preventDefault();
      this.missingFields = this.getMissingFields();
      console.log(this.missingFields);
      if (!this.missingFields.length) {
        alert('Success!')
        location.reload();
      }
    }
  }
};
</script>

<style>
</style>