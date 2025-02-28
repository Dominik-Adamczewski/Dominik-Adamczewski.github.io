<template>
  <img 
    :src="isDarkTheme ? darkThemeData.url : lightThemeData.url" 
    :alt="isDarkTheme ? darkThemeData.altAttr : lightThemeData.altAttr" 
    class="cursor-pointer" 
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
  }
}
</script>

<style></style>
