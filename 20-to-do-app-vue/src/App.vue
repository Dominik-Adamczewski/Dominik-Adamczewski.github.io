<template>
  <header
    class="px-5 pt-10 bg-no-repeat bg-cover bg-center w-full page-header"
    :class="{ 'dark-theme': isDarkThemeUsed }"
  >
    <div class="w-full max-w-lg mx-auto">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl text-proj-20-very-light-gray tracking-widest">
          TODO
        </h1>
        <ThemeSwitchIcon :is-dark-theme="isDarkThemeUsed" @click="changeTheme" />
      </div>
    </div>
    <div class="mx-auto max-w-lg w-full">
      <AddToDoForm @addToDo="addNewToDoItem" :is-dark-theme-enabled="isDarkThemeUsed" />
    </div>
  </header>
  <section 
    class="main-section relative flex items-center flex-col"
    :class="{ 'bg-proj-20-very-dark-desaturated-blue': isDarkThemeUsed, 'bg-proj-20-very-light-gray': !isDarkThemeUsed }"
  >
    <ToDoList 
      :toDoList="isFilterDifferentThanAll ? filteredToDoItems : toDoItems"
      :is-dark-theme-enabled="isDarkThemeUsed"
      @done="markToDoAsDone" 
      @delete="deleteToDo" 
      @clear-completed="clearAllCompletedToDos" 
      @update-list="updateToDoItemsList"
      @change-current-filter="changeFilter"
    />
  </section>
</template>

<script>
import AddToDoForm from "./components/AddToDoForm.vue";
import ToDoList from "./components/ToDoList.vue";
import ThemeSwitchIcon from "./components/ThemeSwitchIcon.vue";

export default {
  components: { AddToDoForm, ToDoList, ThemeSwitchIcon },
  data() {
    return {
      toDoItems: [],
      filteredToDoItems: [],
      isFilterDifferentThanAll: false,
      isDarkThemeUsed: false,
    };
  },
  methods: {
    addNewToDoItem(data) {
      this.toDoItems.push(data);
      localStorage.setItem("toDoList", JSON.stringify(this.toDoItems));
    },
    markToDoAsDone(data) {
      const index = this.toDoItems.findIndex(item => item.id === data);
      if (index !== -1) {
        this.toDoItems[index].isDone = true;
      }
    },
    deleteToDo(data) {
      this.toDoItems = this.toDoItems.filter(item => item.id !== data);
    },
    clearAllCompletedToDos() {
      this.toDoItems = this.toDoItems.filter(item => !item.isDone);
      this.filteredToDoItems = this.toDoItems;
      localStorage.setItem("toDoList", JSON.stringify(this.toDoItems));
    },
    updateToDoItemsList(data) {
      this.toDoItems = data;
      localStorage.setItem("toDoList", JSON.stringify(this.toDoItems));
    },
    changeFilter(newFilter) {
      if (newFilter.text === 'All') {
        this.isFilterDifferentThanAll = false;
        return;
      }

      this.isFilterDifferentThanAll = true;

      if (newFilter.text === 'Active') {
        this.filteredToDoItems = this.toDoItems.filter(item => !item.isDone);
      }

      if (newFilter.text === 'Completed') {
        this.filteredToDoItems = this.toDoItems.filter(item => item.isDone);
      }
    },
    changeTheme() {
      this.isDarkThemeUsed = !this.isDarkThemeUsed;
    }
  },
  computed: {
    toDoList() {
      return this.toDoItems;
    },
  },
  mounted() {
    const storedToDoItems = localStorage.getItem("toDoList");
    this.toDoItems = storedToDoItems ? JSON.parse(storedToDoItems) : [];

    if (this.isDarkThemeUsed) {
      document.body.style.backgroundColor = 'bg-proj-20-very-dark-desaturated-blue';
    }
  },
};
</script>

<style>
:root {
  --header-min-height: 192px;
}

#app {
  font-family: "Josefin Sans", serif;
}

.page-header {
  background-image: url('@/assets/bg-mobile-light.jpg');
  min-height: 192px;
}

.page-header.dark-theme {
  background-image: url('@/assets/bg-mobile-dark.jpg');
}

@media only screen and (min-width: 1024px) {
  .page-header {
    background-image: url('@/assets/bg-desktop-light.jpg');
  }

  .page-header.dark-theme {
    background-image: url('@/assets/bg-desktop-dark.jpg');
  }
}

.main-section {
  min-height: calc(100vh - var(--header-min-height));
}
</style>
