<template>
  <label 
    class="text-white" 
  >
    {{ label }}
  </label>
  <div 
    class="border-2 border-dashed rounded-md p-4 text-white mt-2 cursor-pointer" 
    :class="{ 'bg-gray-800': isDragging }"
    @click="triggerFileInput"
    @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleFileDrop"
  >
    <div class="flex flex-col items-center">
      <div 
        v-if="imagePreview" 
        class="w-10/12 flex flex-col items-center justify-center"
      >
        <img 
          :src="imagePreview" 
          alt="Avatar image preview"
          class="w-14 h-14 rounded-md border border-white mb-4"
        >
        <div class="flex items-center justify-around w-full">
          <BaseButton 
            text="Remove image"
            background-color="lightGray"
            text-color="white"
            button-height="small"
            button-width="initial"
            class="px-2 text-xs font-light"
            @click.stop="removeUploadedImage"
          />
          <BaseButton 
            text="Change image"
            background-color="lightGray"
            text-color="white"
            button-height="small"
            button-width="initial"
            class="px-2 text-xs font-light"
            @click.stop="changeUploadedImage"
          />
        </div>
      </div>
      <div 
        v-else
        class="flex flex-col items-center"
      >
        <img
          src="/images/icon-upload.svg"
          alt="Upload icon"
          class="w-12 h-12"
        >
        <p class="font-extralight mt-2">
          Drag and drop or click to upload
        </p>
      </div>
    </div>
    <input 
      id="file"
      ref="fileInput"
      type="file" 
      name="file-upload-input" 
      hidden
      @change="handleFileUpload"
    >
  </div>
  <div 
    v-if="errors && errors.length > 0"
    class="text-red-700 flex mt-1"
  >
    <img 
      src="/images/icon-info-error.svg" 
      alt="Info icon"
      class="mr-1 self-start mt-1"
    >
    <span>{{ errors[0] }}</span>
  </div>
  <div 
    v-if="!imagePreview && !errors.length"
    class="flex items-center text-xs font-extralight mt-4 text-white"
  >
    <img 
      src="/images/icon-info.svg" 
      alt="Info icon"
      class="mr-1"
    >
    Upload your photo (JPG or PNG, max size: 500KB)
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import BaseButton from './BaseButton.vue';

const emit = defineEmits(['upload']);

defineProps({
  label: String,
});

const fileInput = ref(null);
const imagePreview = ref(null);
const isDragging = ref(false);
const errors = ref([]);

function triggerFileInput() {
  fileInput.value.click();
}

function processFile(file) {
  if (file && file.type.startsWith('image/')) {
    errors.value = [];
    if (file.size < 500000) { // 500kB
      const reader = new FileReader();
      reader.onload = () => {
        imagePreview.value = reader.result;
        emit('upload', { imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      errors.value = ['File too large. Please upload a photo under 500kB!'];
    }
  } else {
    errors.value = ['Uploaded file must be an image!'];
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  processFile(file);
}

function handleFileDrop(event) {
  event.preventDefault();
  isDragging.value = false;

  const file = event.dataTransfer.files[0];
  processFile(file);
}

function handleDragOver(event) {
  event.preventDefault();
  isDragging.value = true;
}

function handleDragLeave(event) {
  event.preventDefault();
  isDragging.value = false;
}

function removeUploadedImage() {
  imagePreview.value = null;
  fileInput.value.value = null;
}

function changeUploadedImage() {
  removeUploadedImage();
  triggerFileInput();
}

</script>

<style>

</style>