<template>
  <form 
    class="flex items-center px-4 rounded-lg mt-6 py-2"
    :class="{ 'bg-proj-20-dark-theme-very-dark-grayish-blue': isDarkThemeEnabled, 'bg-white': !isDarkThemeEnabled }"
  >
    <img
      src="/images/icon-circle.svg"
      alt="Circle icon"
      class="w-6 h-6 mr-2 mb-1"
    />
    <input
      type="text"
      v-model="inputText"
      @input="showAddToDoButton"
      placeholder="Create a new todo..."
      class="w-full text-gray-700 text-sm md:text-lg outline-none"
      :class="{ 'bg-proj-20-dark-theme-very-dark-grayish-blue text-slate-200': isDarkThemeEnabled, 'bg-white text-black': !isDarkThemeEnabled }"
    />
    <button
      v-if="isTextAdded"
      @click="submitNewToDo"
      class="cursor-pointer font-semibold"
      :class="{ 'text-slate-200': isDarkThemeEnabled, 'text-black': !isDarkThemeEnabled }"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isTextAdded: false,
      inputText: "",
    };
  },
  props: {
    isDarkThemeEnabled: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    showAddToDoButton() {
      if (this.inputText) {
        this.isTextAdded = true;
      }
    },
    getIdForNewToDoItem() {
      const currentTodos = JSON.parse(localStorage.getItem('toDoList'));
      return currentTodos?.length ? currentTodos[currentTodos.length - 1].id + 1 : 1;
    },
    submitNewToDo() {
      this.$emit("addToDo", { id: this.getIdForNewToDoItem(), text: this.inputText, isDone: false });
      this.inputText = "";
      this.isTextAdded = false;
    },
  },
};
</script>

<style></style>
