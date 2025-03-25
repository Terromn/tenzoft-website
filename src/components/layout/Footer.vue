<template>
  <footer class="bg-dark text-white pt-12 pb-6">
    <div class="section-container">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">Tenzorial Software</h3>
          <p class="mb-4 text-gray-300">Creating innovative software solutions for businesses and consumers. From custom client projects to our own applications, we deliver quality software that meets real needs.</p>
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
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-primary transition-colors">Home</router-link></li>
            <li><router-link to="/services" class="text-gray-300 hover:text-primary transition-colors">Services</router-link></li>
            <li><router-link to="/portfolio" class="text-gray-300 hover:text-primary transition-colors">Portfolio</router-link></li>
            <li><router-link to="/about" class="text-gray-300 hover:text-primary transition-colors">About</router-link></li>
            <li><router-link to="/contact" class="text-gray-300 hover:text-primary transition-colors">Contact</router-link></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <i class="fas fa-envelope mr-2 text-primary"></i>
              <a href="mailto:info@tenzorialsoftware.com" class="hover:text-primary transition-colors">info@tenzorialsoftware.com</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-2 text-primary"></i>
              <a href="tel:+1234567890" class="hover:text-primary transition-colors">+1 (234) 567-890</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2 text-primary"></i>
              <span>Your Location, City, Country</span>
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