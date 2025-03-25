<template>
  <div>
    <!-- Wrapper div to handle the width and margin transitions -->
    <div 
      class="nav-container fixed top-0 left-0 right-0 z-50"
      :class="[isScrolled ? 'nav-scrolled' : 'nav-top']"
    >
      <nav 
        class="w-full rounded-xl"
        :class="[isScrolled ? 'nav-scrolled-inner' : 'nav-top-inner']"
      >
        <div class="section-container" :class="[isScrolled ? 'py-3' : 'py-5']">
          <div class="flex justify-between items-center">
            <!-- Logo on the left -->
            <div>
              <router-link to="/" class="flex items-center">
                <img src="@/assets/logoIcon.png" alt="Tenzorial Software Logo" class="h-10" />
              </router-link>
            </div>
            
            <!-- Hamburger menu on the right -->
            <div>
              <button @click="toggleMenu" class="text-white focus:outline-none p-2">
                <!-- SVG Hamburger Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Gradient border overlay - This will be a separate element for a smoother transition -->
        <div 
          class="gradient-border absolute inset-0 rounded-xl pointer-events-none transition-opacity"
          :class="{'opacity-100': isScrolled, 'opacity-0': !isScrolled}"
        ></div>
      </nav>
    </div>
    
    <!-- Right Sidebar Menu - Using v-show instead of v-if to keep it in the DOM for animations -->
    <div 
      v-show="menuOpen || animating" 
      class="sidebar-menu fixed top-0 right-0 h-full w-64 z-[60]"
      :class="{ 'sidebar-open': menuOpen, 'sidebar-closed': !menuOpen }"
    >
      <!-- Close button -->
      <div class="flex justify-end p-4">
        <button @click="closeMenu" class="text-white hover:text-gray-300 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Menu items with staggered animation -->
      <div class="flex flex-col space-y-6 px-6 pt-8">
        <router-link 
          v-for="(link, index) in navigationLinks" 
          :key="link.path"
          @click="closeMenu" 
          :to="link.path" 
          class="menu-item text-white hover:text-gray-200 transition-colors text-xl font-nohemi"
          :style="{ transitionDelay: menuOpen ? `${index * 50 + 100}ms` : '0ms' }"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
    
    <!-- Overlay when menu is open -->
    <div 
      v-show="menuOpen || animating" 
      @click="closeMenu"
      class="fixed inset-0 bg-black transition-opacity duration-700 ease-in-out"
      :class="{ 'bg-opacity-50': menuOpen, 'bg-opacity-0': !menuOpen }"
      style="z-index: 59;"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      menuOpen: false,
      animating: false,
      isScrolled: false,
      scrollThreshold: 50, // Start adding margins after 50px of scroll
      navigationLinks: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.handleAnimation();
    },
    closeMenu() {
      this.menuOpen = false;
      this.handleAnimation();
    },
    handleAnimation() {
      this.animating = true;
      setTimeout(() => {
        this.animating = false;
      }, 500); // Keep elements in DOM during animation
    },
    handleScroll() {
      // Update isScrolled based on window scroll position
      this.isScrolled = window.scrollY > this.scrollThreshold;
    }
  },
  mounted() {
    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    
    // Check initial scroll position
    this.handleScroll();
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
/* Navigation container transitions - smoother with staggered properties */
.nav-container {
  transition: 
    width 600ms cubic-bezier(0.33, 1, 0.68, 1),
    margin 800ms cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy effect for margin */
}

.nav-top {
  margin: 0;
  width: 100%;
}

.nav-scrolled {
  margin: 20px 32px;
  width: calc(100% - 64px);
}

/* Inner nav transitions - separate from container for smoother effect */
nav {
  position: relative;
  overflow: hidden; /* Ensure the gradient stays within bounds */
  transition: 
    background-color 700ms ease-in-out,
    box-shadow 1000ms cubic-bezier(0.19, 1, 0.22, 1),
    backdrop-filter 700ms ease-in-out,
    background-opacity 700ms ease-in-out;
}

.nav-top-inner {
  background-color: transparent;
  box-shadow: none;
  backdrop-filter: none;
}

.nav-scrolled-inner {
  background-color: rgba(0, 2, 21, 0.7); /* Your dark color with opacity */
  box-shadow: 
    0 10px 25px -5px rgba(0, 0, 0, 0.2),
    0 8px 10px -6px rgba(0, 0, 0, 0.2),
    0 0 15px rgba(35, 52, 243, 0.25),  /* Primary color glow */
    0 0 25px rgba(81, 95, 255, 0.15);  /* Secondary color glow */
  backdrop-filter: blur(12px);
}

/* Gradient border as a separate element for smoother animation */
.gradient-border {
  background: transparent;
  transition: opacity 800ms ease-in-out;
}

.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  padding: 1px; /* Border width */
  background: linear-gradient(135deg, #2334F3, #515FFF, #2334F3, #515FFF);
  background-size: 300% 300%;
  animation: moveGradient 6s ease infinite;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Sidebar menu styles */
.sidebar-menu {
  background: linear-gradient(135deg, var(--primary-color, #2334F3), var(--secondary-color, #515FFF));
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateX(100%);
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-closed {
  transform: translateX(100%);
}

.menu-item {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.2s ease;
  transition-delay: 0ms;
}

.sidebar-open .menu-item {
  opacity: 1;
  transform: translateX(0);
}

.sidebar-closed .menu-item {
  opacity: 0;
  transform: translateX(20px);
  transition-delay: 0ms !important;
}

/* Define CSS variables for the gradient colors */
:root {
  --primary-color: #2334F3;
  --secondary-color: #515FFF;
}
</style> 