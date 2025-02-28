<template>
  <div class="flex items-center justify-between cursor-pointer">
    <div class="flex items-center" @click="markToDoAsDone">
      <img
        v-if="!isDone"
        src="/images/icon-circle.svg"
        alt="Circle icon"
        class="w-5 h-5"
      />
      <div
        v-else
        class="check-icon w-4 h-4 rounded-full flex items-center justify-center"
      >
        <img src="/images/icon-check.svg" alt="Check icon" class="w-2 h-2" />
      </div>
      <span class="ml-2" :class="{ 'line-through': isDone, 'text-slate-300': isDarkThemeEnabled, 'text-black': !isDarkThemeEnabled }">
        {{ text }}
      </span>
    </div>
    <img src="/images/icon-cross.svg" alt="Close icon" @click="removeToDo" class="w-3 h-3" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
    isDarkThemeEnabled: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    markToDoAsDone() {
      this.$emit('done', this.id);
      let storedToDoItems = JSON.parse(localStorage.getItem("toDoList")) || [];
      const index = storedToDoItems.findIndex(
        (item) => item.id === this.id
      );
      if (index !== -1) {
        storedToDoItems[index] = { id: this.id, text: this.text, isDone: true };
      }
      localStorage.setItem("toDoList", JSON.stringify(storedToDoItems));
    },
    removeToDo() {
      this.$emit("delete", this.id);
      let storedToDoItems = JSON.parse(localStorage.getItem("toDoList")) || [];
      const index = storedToDoItems.findIndex(
        (item) => item.id === this.id
      );
      if (index !== -1) {
        storedToDoItems = storedToDoItems.filter(item => item.id !== this.id);
        localStorage.setItem("toDoList", JSON.stringify(storedToDoItems));
      }
    },
  },
};
</script>

<style scoped>
.check-icon {
  background-image: linear-gradient(to bottom right, #33b2ff, #f464fd);
}
</style>
