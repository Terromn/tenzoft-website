<template>
  <MainLayout>
    <!-- Background container that spans both Hero and Nosotros sections -->
    <div class="relative overflow-visible bg-dark">
      <!-- WaveBackground with extended flow height -->
      <WaveBackground 
        class="absolute inset-0 pointer-events-none z-10" 
        :flowHeight="200"
        :particleCount="2000"
        :speed="0.3"
      />

      <!-- Hero Section -->
      <section
        class="bg-transparent text-white flex items-center justify-center relative pt-0 hero-section"
      >
        <div class="section-container relative z-10 w-full">
          <div class="flex flex-col items-center">
            <div data-aos="fade-up" class="max-w-3xl text-center">
              <h1 class="text-landing font-bold text-primary-light font-nohemi">
                Transformamos
                <span class="font-nohemi gradient-text">ideas</span> en
                <span class="font-nohemi gradient-text">experiencias</span> digitales
                <span class="font-nohemi gradient-text">unicas</span>
              </h1>

              <div
                class="mt-0 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <router-link
                  to="/portfolio?type=web"
                  class="btn-primary-outline font-nohemi text-lg px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Ver Proyectos
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Gradient fade-out at the bottom of hero section -->
        <div class="hero-fade-out"></div>
      </section>

      <!-- Nosotros Section - With particles flowing through -->
      <section class="bg-dark bg-opacity-85 text-white py-16 relative z-20 mt-[-100px]">
        <!-- Semi-transparent gradient overlay to transition between sections -->
        <div class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark opacity-95 z-0"></div>
        
        <div class="section-container relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-heading-1 font-bold mb-4 font-nohemi" data-aos="fade-up">Nosotros</h2>
            <p class="text-body-large text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              En Tenzoft, nos dedicamos a transformar ideas innovadoras en soluciones digitales excepcionales.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div class="card-hover bg-dark-light p-8 rounded-lg transform transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <h3 class="text-heading-3 font-semibold mb-4 font-nohemi">Nuestra Misión</h3>
              <p class="text-body-large text-gray-300">
                Crear soluciones tecnológicas que permitan a nuestros clientes alcanzar sus objetivos de negocio, 
                combinando innovación técnica con una experiencia de usuario excepcional.
              </p>
            </div>
            
            <div class="card-hover bg-dark-light p-8 rounded-lg transform transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <h3 class="text-heading-3 font-semibold mb-4 font-nohemi">Nuestra Visión</h3>
              <p class="text-body-large text-gray-300">
                Ser reconocidos como líderes en el desarrollo de software personalizado y aplicaciones móviles 
                que marcan la diferencia en la transformación digital de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Stats Section with Animations -->
    <section class="py-16 bg-dark">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-heading-1 font-nohemi font-bold mb-4 text-white" data-aos="fade-up">Nuestro Impacto</h2>
          <p
            class="text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Nuestros números hablan por sí mismos
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            class="bg-dark-light p-6 rounded-lg shadow-md text-center card-hover"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- Users icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto card-icon mb-4" viewBox="0 0 640 512" fill="currentColor">
              <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
            </svg>
            <h3 class="text-heading-3 font-nohemi mb-2 text-white">Clientes</h3>
            <div class="text-4xl font-bold text-primary-light">
              <span ref="clientCounter">0</span>+
            </div>
          </div>

          <div
            class="bg-dark-light p-6 rounded-lg shadow-md text-center card-hover"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <!-- Project diagram icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto card-icon mb-4" viewBox="0 0 640 512" fill="currentColor">
              <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <h3 class="text-heading-3 font-nohemi mb-2 text-white">Proyectos</h3>
            <div class="text-4xl font-bold text-primary-light">
              <span ref="projectCounter">0</span>+
            </div>
          </div>

          <div
            class="bg-dark-light p-6 rounded-lg shadow-md text-center card-hover sm:col-span-2 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <!-- Download icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto card-icon mb-4" viewBox="0 0 512 512" fill="currentColor">
              <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/>
            </svg>
            <h3 class="text-heading-3 font-nohemi mb-2 text-white">Impresiones</h3>
            <div class="text-4xl font-bold text-primary-light">
              <span ref="downloadCounter">0</span>k+
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- Reviews Section -->
    <section class="py-20 bg-dark text-white">
      <div class="section-container">
        <div class="text-center mb-6">
          <h3 class="text-heading-1 font-nohemi font-bold text-white" data-aos="fade-up">Lo que opinan nuestros clientes</h3>
        </div>
        
        <div class="reviews-slider-container" data-aos="fade-up" data-aos-delay="100">
          <div class="reviews-slider">
            <!-- Review Card 1 -->
            <div class="review-card tilt-card" ref="reviewCard1">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Tenzoft transformó nuestra idea en una aplicación móvil excepcional. Su enfoque en la experiencia del usuario y la calidad técnica fue impresionante. Entregaron el proyecto antes del plazo y superaron todas nuestras expectativas."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">Aplicación de Fitness</p>
                  <p class="text-gray-400">HealthTech Solutions</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>
            
            <!-- Review Card 2 -->
            <div class="review-card tilt-card" ref="reviewCard2">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Elegimos Tenzoft para rediseñar nuestro sitio web corporativo y fue una decisión excelente. No solo crearon un diseño moderno y atractivo, sino que también mejoraron significativamente la velocidad y el rendimiento del sitio."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">Sitio Web Corporativo</p>
                  <p class="text-gray-400">Global Investments Group</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>
            
            <!-- Review Card 3 -->
            <div class="review-card tilt-card" ref="reviewCard3">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "La plataforma de comercio electrónico que desarrolló Tenzoft aumentó nuestras ventas en un 45% en los primeros tres meses. Su atención al detalle y conocimiento técnico realmente marcaron la diferencia para nuestro negocio."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">Plataforma E-commerce</p>
                  <p class="text-gray-400">Artesanías del Sur</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>
            
            <!-- Review Card 4 -->
            <div class="review-card tilt-card" ref="reviewCard4">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Tenzoft desarrolló una API personalizada que integró perfectamente todos nuestros sistemas internos. Su equipo técnico manejó un proyecto complejo con profesionalismo y entregó una solución que superó todas nuestras expectativas."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">Integración de API</p>
                  <p class="text-gray-400">Logística Express</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>
          </div>
          
          <!-- Navigation dots -->
          <div class="reviews-navigation">
            <button class="nav-dot active" @click="scrollToReview(0)"></button>
            <button class="nav-dot" @click="scrollToReview(1)"></button>
            <button class="nav-dot" @click="scrollToReview(2)"></button>
            <button class="nav-dot" @click="scrollToReview(3)"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-dark text-white">
      <div class="section-container text-center">
        <h2 class="text-heading-1 font-bold mb-6 font-nohemi" data-aos="fade-up">
          ¿Estas listo para convertir tu vision en una realidad?
        </h2>
        <p class="text-body-large mb-8 max-w-2xl mx-auto font-nohemi font-light" data-aos="fade-up" data-aos-delay="100">
          Iniciemos juntos tu proyecto digital
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <router-link to="/contact" class="btn-primary">
            <i class="fa-brands fa-whatsapp mr-2"></i> Contactanos
          </router-link>
          
        </div>
      </div>
    </section>

    
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layout/MainLayout.vue";
import WaveBackground from "@/components/effects/WaveBackground.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "HomeView",
  components: {
    MainLayout,
    WaveBackground,
  },
  setup() {
    const clientCounter = ref(null);
    const projectCounter = ref(null);
    const appCounter = ref(null);
    const downloadCounter = ref(null);
    
    // References for review cards
    const reviewCard1 = ref(null);
    const reviewCard2 = ref(null);
    const reviewCard3 = ref(null);
    const reviewCard4 = ref(null);

    // Function to handle scrolling to specific review
    const scrollToReview = (index) => {
      const reviewsSlider = document.querySelector('.reviews-slider');
      const cardWidth = document.querySelector('.review-card').offsetWidth;
      reviewsSlider.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      
      // Update active dot
      document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    // Animation for the counters using GSAP
    onMounted(() => {
      // Animate the client counter
      gsap.to(clientCounter.value, {
        innerHTML: 4,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: clientCounter.value,
          start: "top 80%",
        },
      });

      // Animate the project counter
      gsap.to(projectCounter.value, {
        innerHTML: 6,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: projectCounter.value,
          start: "top 80%",
        },
      });

      // Animate the app counter
      gsap.to(appCounter.value, {
        innerHTML: 12,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: appCounter.value,
          start: "top 80%",
        },
      });

      // Animate the download counter
      gsap.to(downloadCounter.value, {
        innerHTML: 12,
        duration: 2.5,
        snap: { innerHTML: 5 },
        scrollTrigger: {
          trigger: downloadCounter.value,
          start: "top 80%",
        },
      });
      
      // 3D tilt effect for review cards
      const cards = [reviewCard1.value, reviewCard2.value, reviewCard3.value, reviewCard4.value];
      
      cards.forEach(card => {
        if (!card) return;
        
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const deltaX = (x - centerX) / centerX;
          const deltaY = (y - centerY) / centerY;
          
          card.style.transform = `perspective(800px) rotateX(${-deltaY * 10}deg) rotateY(${deltaX * 10}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
      });
      
      // Initialize review slider scroll detection
      const reviewsSlider = document.querySelector('.reviews-slider');
      if (reviewsSlider) {
        reviewsSlider.addEventListener('scroll', () => {
          const cardWidth = document.querySelector('.review-card').offsetWidth;
          const scrollPosition = reviewsSlider.scrollLeft;
          const index = Math.round(scrollPosition / cardWidth);
          
          document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            if (i === index) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        });
      }
    });

    return {
      clientCounter,
      projectCounter,
      appCounter,
      downloadCounter,
      reviewCard1,
      reviewCard2,
      reviewCard3,
      reviewCard4,
      scrollToReview
    };
  },
};
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #2334f3, #515fff, #2334f3, #515fff);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  animation: gradient-flow 4xls linear infinite;
}

/* Hero section enhancements */
.hero-section {
  min-height: calc(100vh + 100px); /* Extend 100px beyond viewport */
  padding-bottom: 120px; /* Add padding at bottom for content */
  position: relative;
}

.hero-fade-out {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px; /* Height of the fade-out gradient */
  background: linear-gradient(to bottom, rgba(0, 2, 21, 0) 0%, rgba(0, 2, 21, 0.8) 80%, rgba(0, 2, 21, 0.95) 100%);
  z-index: 5;
  pointer-events: none;
}

/* Background and section styling */
.bg-dark {
  background-color: rgb(0, 2, 21);
}

.bg-dark-light {
  background-color: rgba(10, 15, 40, 0.6);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(81, 95, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Ensure the wave background container spans both sections */
.h-[200vh] {
  height: 200vh;
}

@keyframes gradient-flow {
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

/* Button styles */
.btn-primary-outline {
  position: relative;
  background-color: transparent;
  color: white;
  border: 2px solid transparent;
  overflow: hidden;
  z-index: 1;
}

.btn-primary-outline::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #2334f3, #515fff, #2334f3, #515fff);
  background-size: 300% 300%;
  animation: moveGradient 6s ease infinite;
  border-radius: 9999px;
  z-index: -2;
}

.btn-primary-outline::after {
  content: "";
  position: absolute;
  inset: 2px;
  background-color: rgba(0, 2, 21, 0.8);
  border-radius: 9999px;
  z-index: -1;
  transition: background-color 0.3s ease;
}

.btn-primary-outline:hover::after {
  background-color: rgba(0, 2, 21, 0.5);
}

.btn-secondary {
  background: linear-gradient(135deg, #2334f3, #515fff);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(35, 52, 243, 0.3);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  box-shadow: 0 6px 20px rgba(35, 52, 243, 0.5);
}

/* Contact button with moving glowing outline */
.btn-primary {
  position: relative;
  background: linear-gradient(135deg, #2334f3, #515fff);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  border: none;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(35, 52, 243, 0.3);
}

.btn-primary:hover {
  box-shadow: 
    0 0 0 2px rgba(255, 255, 255, 0.8),
    0 0 10px 2px rgba(35, 52, 243, 0.6),
    0 0 20px 2px rgba(81, 95, 255, 0.4);
  transform: translateY(-2px);
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

/* Card hover effects */
.card-hover {
  position: relative;
  border: 1px solid rgba(81, 95, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1;
}

.card-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(35, 52, 243, 0), rgba(81, 95, 255, 0));
  z-index: -1;
  transition: opacity 0.5s ease;
  opacity: 0;
}

.card-hover::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #2334F3, #515FFF, #2334F3, #515FFF);
  background-size: 400% 400%;
  z-index: -2;
  transition: opacity 0.5s ease;
  opacity: 0;
  border-radius: 0.5rem;
  filter: blur(8px);
  animation: moveGradient 6s ease infinite;
}

.card-hover:hover {
  transform: translateY(-5px);
  border-color: rgba(81, 95, 255, 0);
  box-shadow: 
    0 10px 30px -5px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(35, 52, 243, 0.3);
}

.card-hover:hover::before {
  opacity: 0.1;
}

.card-hover:hover::after {
  opacity: 0.7;
}

/* Icon styling and hover effect */
.card-icon {
  color: #2334f3; /* Primary blue color */
  transition: color 0.3s ease;
}

.card-hover:hover .card-icon {
  color: white;
}

/* Reviews section styling */
.reviews-slider-container {
  position: relative;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
}

.reviews-slider {
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding: 30px 50px; /* Increase horizontal padding */
  gap: 3rem; /* Add gap between flex items */
}

.reviews-slider::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.review-card {
  flex: 0 0 100%;
  scroll-snap-align: center;
  background-color: rgba(10, 15, 40, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(81, 95, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin: 0 auto;
  margin-right: 3rem; /* Add spacing between cards */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  overflow: hidden;
}

/* Last card shouldn't have right margin */
.review-card:last-child {
  margin-right: 0;
}

.tilt-card {
  transform-style: preserve-3d;
  transform: perspective(800px);
  transition: all 0.3s ease;
}

.review-content {
  position: relative;
  z-index: 1;
  transform: translateZ(30px);
}

.review-author {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  margin-top: auto;
}

.tilt-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(35, 52, 243, 0.05), rgba(81, 95, 255, 0.05));
  border-radius: 16px;
  transform: translateZ(20px);
  z-index: 0;
}

.reviews-navigation {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 6px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background-color: #2334f3;
  transform: scale(1.2);
}
</style>
