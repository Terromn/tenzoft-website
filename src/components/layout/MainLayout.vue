<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <TopNav />
    
    <main class="flex-grow">
      <slot></slot>
    </main>
    
    <!-- WhatsApp Floating Button -->
    <a 
      href="https://wa.me/+528132571521" 
      target="_blank" 
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    
    <FooterSection />
  </div>
</template>

<script>
import TopNav from "./TopNav.vue";
import FooterSection from "./Footer.vue";

export default {
  name: "MainLayout",
  components: {
    TopNav,
    FooterSection,
  },
};
</script>

<style scoped>
/* Remove padding to allow content to extend to the top of the viewport */
main {
  padding-top: 0;
  position: relative;
  z-index: 1; /* Lower than header's z-100 */
}

.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  background-color: #128C7E;
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0,0,0,0.3);
}

/* Pulse animation for more attention */
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

.whatsapp-float {
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  animation: none;
}
</style> 