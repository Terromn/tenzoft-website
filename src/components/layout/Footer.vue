<template>
  <footer class="bg-dark text-white pt-12 pb-6">
    <div class="section-container">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold font-nohemi mb-4">Tenzoft</h3>
          <p class="mb-4 text-gray-300">Creando soluciones de software innovadoras para empresas y consumidores. Desde proyectos personalizados para clientes hasta nuestras propias aplicaciones, ofrecemos software de calidad que satisface necesidades reales.</p>
          <!-- Social Media Links -->
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-white hover:text-primary transition-colors">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-primary transition-colors">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-primary transition-colors">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-primary transition-colors">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold font-nohemi mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-primary transition-colors">Inicio</router-link></li>
            <li><router-link to="/#nosotros" class="text-gray-300 hover:text-primary transition-colors">Nosotros</router-link></li>
            <li><router-link to="/#proyectos" class="text-gray-300 hover:text-primary transition-colors">Proyectos</router-link></li>
            <li><router-link to="/#impacto" class="text-gray-300 hover:text-primary transition-colors">Impacto</router-link></li>
            <li><router-link to="/#contact" class="text-gray-300 hover:text-primary transition-colors">Contacto</router-link></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold font-nohemi mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-300">
           
            <li class="flex items-center">
              <i class="fas fa-phone mr-2 text-primary"></i>
              <a href="tel:+1234567890" class="hover:text-primary transition-colors">+52 (81) 3257-1521</a>
            </li>
            <li class="flex items-center">
              <i class="fa-brands fa-map-marker-alt mr-2 text-primary"></i>
              <span>Nuevo Leon, Monterrey</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Tenzorial Software. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script> 