<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// State to track if header should be visible
const showHeader = ref(false)

// Function to handle scroll events
const handleScroll = () => {
  // Show header after scrolling down 100px
  showHeader.value = window.scrollY > 100
}

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-container">
    <!-- Global Header that appears when scrolling -->
    <div class="header-container" :class="{ 'header-visible': showHeader }">
      <Header class="fixed-header" />
    </div>
    
    <!-- Router view for page content -->
    <router-view />
  </div>
</template>

<style>
/* Global styles */
.app-container {
  position: relative;
  min-height: 100vh;
}

.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Very high z-index to ensure it's above everything */
  pointer-events: none; /* Disable pointer events when hidden */
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: center; /* Center the header horizontally */
}

.header-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto; /* Enable pointer events when visible */
}

.fixed-header {
  position: relative;
  width: 100%;
  max-width: 1920px; /* Prevent the header from getting too wide on large screens */
}
</style>
