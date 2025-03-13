<template>
  <img 
    :src="isDarkTheme ? darkThemeData.url : lightThemeData.url" 
    :alt="isDarkTheme ? darkThemeData.altAttr : lightThemeData.altAttr" 
    class="cursor-pointer hover:opacity-50 transition-opacity duration-300"
    @click="toggleDarkThemeMode"
  />
</template>

<script>
export default {
  data() {
    return {
      lightThemeData: { url: '/images/icon-moon.svg', altAttr: 'Moon icon' },
      darkThemeData: { url: '/images/icon-sun.svg', altAttr: 'Sun icon' },
    }
  },
  props: {
    isDarkTheme: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    toggleDarkThemeMode() {
      this.$store.commit('toggleDarkTheme');
    }
  }
}
</script>

<style></style>
