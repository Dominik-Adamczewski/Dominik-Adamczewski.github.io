<template>
  <div class="w-4/5 max-w-lg">
    <div v-if="toDoList.length">
      <div
        class="-mt-6" 
        :class="{ 
          'rounded-md': toDoList.length > 1, 
          'rounded-tr-md rounded-tl-md': toDoList.length === 1, 
          'bg-proj-20-dark-theme-very-dark-grayish-blue': isDarkThemeEnabled, 
          'bg-white border': !isDarkThemeEnabled 
        }"
        @dragover.prevent
        @dragenter.prevent
      >
      <transition-group name="fade" tag="div">
        <div 
          v-for="(item, index) in toDoList"
          :key="item.id"
          :draggable="!item.isDone"
          @dragstart="startDrag($event, index)"
          @dragover.prevent
          @drop="onDrop(index)"
        >
          <ToDoItem
            :text="item.text"
            :isDone="item.isDone"
            :id="item.id"
            :is-dark-theme-enabled="isDarkThemeEnabled"
            @done="markToDoAsDone"
            @delete="deleteToDo"
            class="py-2 px-3 box-border w-full"
          />
          <div class="border-b border-gray-500"></div>
        </div>
      </transition-group>
        <div
          class="flex items-center px-3 py-3 text-[10px] text-proj-20-dark-theme-dark-grayish-blue" 
          :class="{ 'justify-end': !numberOfToDoItems, 'justify-between': numberOfToDoItems }"
        >
          <span v-if="numberOfToDoItems" class="cursor-pointer">{{ numberOfToDoItems }} Items left</span>
          <span @click="clearCompletedToDos" class="cursor-pointer">Clear completed</span>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center mt-4">
      <div
        class="check-icon w-5 h-5 rounded-full flex items-center justify-center bg-green-500 mr-2"
      >
        <img src="/images/icon-check.svg" alt="Check icon" class="w-3 h-3" />
      </div>
      <span 
        class="pt-1"
        :class="{ 'text-slate-300': isDarkThemeEnabled }"
      >
        Nothing to be done, all check!
      </span>
    </div>
    <FiltersBar @change-filter="changeCurrentFilter" :to-do-list="toDoList" :is-dark-theme-enabled="isDarkThemeEnabled" ref="filtersBar" />
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import FiltersBar from "./FiltersBar.vue";

export default {
  components: {
    ToDoItem,
    FiltersBar,
  },
  props: {
    toDoList: {
      type: Array,
      required: true,
    },
    isDarkThemeEnabled: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      draggedIndex: null,
    };
  },
  methods: {
    markToDoAsDone(data) {
      this.$emit('done', data);
    },
    deleteToDo(data) {
      this.$emit('delete', data);
    },
    clearCompletedToDos() {
      this.$emit('clear-completed');
      if (this.$refs.filtersBar) {
        this.$refs.filtersBar.setDefaultFilter();
      }
    },
    startDrag(evt, index) {
      this.draggedIndex = index;
      evt.dataTransfer.effectAllowed = 'move';
    },
    onDrop(dropIndex) {
      if (this.draggedIndex !== null && this.draggedIndex !== dropIndex) {
        const items = [...this.toDoList];
        const movedItem = items.splice(this.draggedIndex, 1)[0];
        items.splice(dropIndex, 0, movedItem);

        this.$emit('update-list', items);
      }
      this.draggedIndex = null;
    },
    changeCurrentFilter(data) {
      this.$emit('change-current-filter', data);
    }
  },
  computed: {
    numberOfToDoItems() {
      return this.toDoList.filter(item => !item.isDone).length;
    },
  },
};
</script>

<style>
[draggable="true"]:active {
  cursor: grabbing;
}

.fade-enter-active {
  animation: fadeIn 0.5s ease-out;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
