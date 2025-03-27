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
        <div class="section-container" :class="[isScrolled ? 'py-3' : 'py-5', 'px-4 sm:px-6']">
          <div class="flex justify-between items-center">
            <!-- Logo on the left -->
            <div>
              <router-link to="/" class="flex items-center">
                <img src="@/assets/logoIcon.png" alt="Tenzorial Software Logo" class="h-8 sm:h-10" />
              </router-link>
            </div>
            
            <!-- Hamburger menu on the right -->
            <div>
              <button @click="toggleMenu" class="text-white focus:outline-none p-1 sm:p-2 hamburger-button">
                <!-- SVG Hamburger Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      class="sidebar-menu fixed top-0 right-0 h-full z-[60]"
      :class="{ 'sidebar-open': menuOpen, 'sidebar-closed': !menuOpen }"
    >
      <!-- Close button -->
      <div class="flex justify-end p-3 sm:p-4">
        <button @click="closeMenu" class="text-white hover:text-gray-300 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Menu items with staggered animation -->
      <div class="flex flex-col space-y-4 sm:space-y-6 px-4 sm:px-6 pt-4 sm:pt-8">
        <a 
          v-for="(link, index) in navigationLinks" 
          :key="link.path"
          @click.prevent="scrollToSection(link.path)"
          href="#" 
          class="menu-item text-white hover:text-gray-200 transition-colors text-xl font-nohemi"
          :class="{ 'active': isActivePath(link.path) }"
          :style="{ transitionDelay: menuOpen ? `${index * 80 + 150}ms` : '0ms' }"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
    
    <!-- Overlay when menu is open -->
    <div 
      v-show="menuOpen || animating" 
      @click="closeMenu"
      class="fixed inset-0 bg-black transition-all duration-700 ease-in-out menu-overlay"
      :class="{ 'bg-opacity-50 overlay-visible': menuOpen, 'bg-opacity-0 overlay-hidden': !menuOpen }"
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
      activeSection: '',
      navigationLinks: [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/#nosotros' },
        { name: 'Proyectos', path: '/#proyectos' },
        { name: 'Impacto', path: '/#impacto' },
        { name: 'Testimonios', path: '/#testimonios' },
        { name: 'Contacto', path: '/#contact' }
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
      }, 1000); // Increase to 1000ms to allow animations to fully complete
    },
    handleScroll() {
      // Update isScrolled based on window scroll position
      this.isScrolled = window.scrollY > this.scrollThreshold;
    },
    // New method to handle anchor link scrolling
    scrollToSection(path) {
      this.closeMenu();
      
      if (path.includes('#')) {
        const currentPath = this.$route.path;
        const targetPath = path.split('#')[0];
        const targetId = path.split('#')[1];
        
        // If we're already on the correct page, just scroll to the element
        if (currentPath === targetPath || (currentPath === '/' && targetPath === '')) {
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
          return;
        }
        
        // Otherwise navigate to the page first, then scroll
        this.$router.push(targetPath).then(() => {
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 500);
        });
      } else {
        // Regular navigation without hash
        this.$router.push(path);
      }
    },
    isActivePath(path) {
      if (path === '/') {
        return this.$route.path === '/' && !this.activeSection;
      }
      
      if (path.includes('#')) {
        const sectionId = path.split('#')[1];
        return this.activeSection === sectionId;
      }
      
      return this.$route.path === path;
    },
    updateActiveSection() {
      // Only run on home page
      if (this.$route.path !== '/') {
        this.activeSection = '';
        return;
      }
      
      // Get all section elements with IDs
      const sections = document.querySelectorAll('section[id]');
      
      // Get the current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find the section that's currently in view
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      this.activeSection = currentSection;
    }
  },
  mounted() {
    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.updateActiveSection);
    
    // Check initial scroll position
    this.handleScroll();
    this.updateActiveSection();
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.updateActiveSection);
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

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .nav-scrolled {
    margin: 10px 16px;
    width: calc(100% - 32px);
  }
}

@media (max-width: 480px) {
  .nav-scrolled {
    margin: 8px 12px;
    width: calc(100% - 24px);
  }
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
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease;
  transform: translateX(100%);
  overflow: hidden;
  /* Add initial position to ensure it's fully off-screen */
  right: 0;
  opacity: 0; /* Start with opacity 0 */
  width: 16rem; /* 64px (w-64) in rem units */
}

/* Responsive sidebar width adjustments */
@media (max-width: 480px) {
  .sidebar-menu {
    width: 80%; /* Use percentage width on smaller screens */
  }
}

.sidebar-open {
  transform: translateX(0);
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.5);
  opacity: 1; /* Fade in to full opacity */
}

.sidebar-closed {
  transform: translateX(100%);
  opacity: 0; /* Fade out */
}

.menu-item {
  opacity: 0;
  transform: translateX(60px); /* Increase initial offset */
  transition: 
    opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
    transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
    color 0.3s ease;
  transition-delay: 0ms;
  will-change: transform, opacity; /* Performance optimization */
}

.sidebar-open .menu-item {
  opacity: 1;
  transform: translateX(0);
}

.sidebar-closed .menu-item {
  opacity: 0;
  transform: translateX(60px); /* Match the initial offset for consistency */
  transition-delay: 0ms !important;
}

/* Define CSS variables for the gradient colors */
:root {
  --primary-color: #2334F3;
  --secondary-color: #515FFF;
}

.menu-item.active {
  color: white;
  font-weight: bold;
  transform: translateX(0);
  position: relative;
}

.menu-item.active::after {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Add animation for the close button */
.sidebar-menu button {
  transition: transform 0.3s ease;
}

.sidebar-menu button:hover {
  transform: rotate(90deg);
}

/* Hamburger button animation */
.hamburger-button {
  transition: transform 0.3s ease;
  position: relative;
  z-index: 100;
}

.hamburger-button:hover {
  transform: scale(1.1);
}

.hamburger-button svg {
  transition: stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.hamburger-button:active svg {
  animation: pulse 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}

/* Add overlay animation classes */
.menu-overlay {
  backdrop-filter: blur(0px);
  transition: 
    backdrop-filter 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    background-opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.overlay-visible {
  backdrop-filter: blur(4px);
}

.overlay-hidden {
  backdrop-filter: blur(0px);
}

/* Adjust menu items for mobile */
@media (max-width: 480px) {
  .menu-item {
    font-size: 1.1rem; /* Slightly smaller font on mobile */
    padding: 0.5rem 0; /* Add vertical padding for larger touch targets */
  }
  
  .menu-item.active::after {
    left: -10px; /* Adjust active indicator position */
    height: 16px; /* Slightly smaller indicator */
  }
}

/* Add tap highlight effect for mobile users */
@media (max-width: 768px) {
  .menu-item:active {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  /* Faster transitions on mobile for better performance */
  .sidebar-menu {
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  /* Ensure menu doesn't get cut off at bottom on smaller screens */
  .sidebar-menu {
    padding-bottom: 5rem;
    overflow-y: auto; /* Allow scrolling if menu is too tall */
  }
  
  /* Adjust font weight for better readability on mobile */
  .menu-item {
    font-weight: 500;
  }
}

/* Make touch targets large enough */
.menu-item {
  min-height: 44px; /* Minimum recommended touch target size */
  display: flex;
  align-items: center;
}
</style> 