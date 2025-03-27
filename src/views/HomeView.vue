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
        <div class="section-container relative z-10 w-full px-5 sm:px-6 md:px-8">
          <div class="flex flex-col items-center">
            <div data-aos="fade-up" class="max-w-3xl text-center mx-auto">
              <h1 class="text-3xl md:text-5xl lg:text-landing font-bold text-primary-light font-nohemi leading-tight">
                Transformamos
                <span class="font-nohemi gradient-text">ideas</span> en
                <span class="font-nohemi gradient-text">experiencias</span> digitales
                <span class="font-nohemi gradient-text">unicas</span>
            </h1>
  
              <div
                class="mt-4 md:mt-6 lg:mt-0 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <router-link
                  to="/#proyectos"
                  class="btn-primary-outline font-nohemi text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transform hover:scale-105 transition-all duration-300"
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
      <section id="nosotros" class="bg-dark bg-opacity-85 text-white py-16 relative z-20 mt-[-100px]">
        <!-- Semi-transparent gradient overlay to transition between sections -->
        <div
          class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark opacity-95 z-0"
        ></div>

        <div class="section-container relative z-10">
        <div class="text-center mb-12">
            <h2 class="text-heading-1 font-bold mb-4 font-nohemi" data-aos="fade-up">
              Nosotros
            </h2>
          <p
              class="text-body-large text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
              En Tenzoft, nos dedicamos a transformar ideas innovadoras en soluciones
              digitales excepcionales.
          </p>
        </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div
              class="card-hover bg-dark-light p-8 rounded-lg transform transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
              <h3 class="text-heading-3 font-semibold mb-4 font-nohemi">
                Nuestra Misión
              </h3>
              <p class="text-body-large text-gray-300">
                Crear soluciones tecnológicas que permitan a nuestros clientes alcanzar
                sus objetivos de negocio, combinando innovación técnica con una
                experiencia de usuario excepcional.
              </p>
          </div>

          <div
              class="card-hover bg-dark-light p-8 rounded-lg transform transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
              <h3 class="text-heading-3 font-semibold mb-4 font-nohemi">
                Nuestra Visión
              </h3>
              <p class="text-body-large text-gray-300">
                Ser reconocidos como líderes en el desarrollo de software personalizado y
                aplicaciones móviles que marcan la diferencia en la transformación digital
                de nuestros clientes.
              </p>
            </div>

            <!-- Nueva card que abarca todo el ancho -->
            <div
              id="tecnologias"
              class="card-hover bg-dark-light py-8 rounded-lg transform transition-all duration-300 md:col-span-2 mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 class="text-heading-3 font-semibold mb-6 font-nohemi text-center">
                Tecnologías Usadas
              </h3>
              
              <!-- Centered tech icons container -->
              <div class="tech-icons-container">
                <div class="tech-icons-grid">
                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">HTML5</p>
                  </div>

                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">CSS</p>
                  </div>
                  
                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">JavaScript</p>
                  </div>

                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">Tailwind</p>
                  </div>

                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"/>
                      <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">Bootstrap</p>
                  </div>
                  
                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">React</p>
                  </div>
                  
                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">Vue</p>
                  </div>
                  
                  <div class="tech-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tech-icon" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 00-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0031.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 00-19.36 0L85.83 375.74z"/>
                    </svg>
                    <p class="text-gray-300 mt-2">Firebase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

    <!-- Projects Section -->
    <section id="proyectos" class="py-20 bg-dark text-white">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-heading-1 font-bold mb-4 font-nohemi" data-aos="fade-up">
            Nuestros Proyectos
          </h2>
          <p
            class="text-body-large text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Descubre algunos de nuestros trabajos más destacados
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Project Card 1 - Pawhouse -->
          <div
            class="project-card bg-dark-light rounded-lg overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div class="relative h-64 overflow-hidden">
              <!-- Using the pawhouse.png image -->
              <img 
                src="@/assets/images/pawhouse.png" 
                alt="Pawhouse Dog Hotel mockup" 
                class="w-full h-full object-cover object-center"
              />
              <!-- Gradient overlay for better text visibility -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-heading-3 font-nohemi mb-2">Pawhouse Dog Hotel</h3>
                <p class="text-gray-300">Sistema de administración y website para hotel canino</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="tech-tag">Flutter</span>
                <span class="tech-tag">Firebase</span>
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
              </div>
              <div class="flex  items-left">
                
                <a 
                  href="https://pawhouse-hotel.web.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"
                >
                  Visitar sitio
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project Card 2 - Mua Arquitectos -->
          <div
            class="project-card bg-dark-light rounded-lg overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div class="relative h-64 overflow-hidden">
              <!-- Using the muaarq.png image -->
              <img 
                src="@/assets/images/muaarq.png" 
                alt="Mua Arquitectos mockup" 
                class="w-full h-full object-cover object-center"
              />
              <!-- Gradient overlay for better text visibility -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-heading-3 font-nohemi mb-2">Mua Arquitectos</h3>
                <p class="text-gray-300">Portfolio digital para estudio de arquitectura</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="tech-tag">React</span>
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
              </div>
              <div class="flex justify-between items-center">
               
                <a 
                  href="https://muaarquitectos.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"
                >
                  Visitar sitio
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project Card 3 - La Casa Del Nicho -->
          <div
            class="project-card bg-dark-light rounded-lg overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div class="relative h-64 overflow-hidden">
              <!-- Using the lacasadelnicho.png image -->
              <img 
                src="@/assets/images/lacasadelnicho.png" 
                alt="La Casa Del Nicho mockup" 
                class="w-full h-full object-cover object-center"
              />
              <!-- Gradient overlay for better text visibility -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-heading-3 font-nohemi mb-2">La Casa Del Nicho</h3>
                <p class="text-gray-300">E-commerce y sistema de inventario</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="tech-tag">Shopify</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">CSS</span>
              </div>
              <div class="flex justify-between items-center">
               
                <a 
                  href="https://lacasadelnicho.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"
                >
                  Visitar sitio
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project Card 4 - Outwork Calisthenics -->
          <div
            class="project-card bg-dark-light rounded-lg overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div class="relative h-64 overflow-hidden">
              <img 
                src="@/assets/images/outworkmockup.png" 
                alt="Outwork Calisthenics mockup" 
                class="w-full h-full object-cover object-center"
              />
              <!-- Modified gradient overlay with stronger contrast for better text visibility -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/60 to-dark opacity-95"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-heading-3 font-nohemi mb-2">Outwork Calisthenics</h3>
                <p class="text-gray-300">Sistema de reservas y website de presentación</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Bootstrap</span>
                <span class="tech-tag">Firebase</span>
              </div>
              <div class="flex items-left">
                
                <a 
                  href="https://outwork.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-block text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-light transition-colors"
                >
                  Visitar sitio
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section with Animations -->
    <section id="impacto" class="py-16 bg-dark">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2
            class="text-heading-1 font-nohemi font-bold mb-4 text-white"
            data-aos="fade-up"
          >
            Nuestro Impacto
          </h2>
          <p
            class="text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Nuestros números hablan por sí mismos
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div
            class="bg-dark-light p-6 rounded-lg shadow-md text-center card-hover"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- Users icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-auto card-icon mb-4"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path
                d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-auto card-icon mb-4"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path
                d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-auto card-icon mb-4"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              />
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
    <section id="testimonios" class="py-20 bg-dark text-white">
      <div class="section-container">
        <div class="text-center mb-6">
          <h3 class="text-heading-1 font-nohemi font-bold text-white" data-aos="fade-up">
            Lo que nuestros clientes dicen de nosotros
          </h3>
        </div>

        <div class="reviews-slider-container" data-aos="fade-up" data-aos-delay="100">
          <div class="reviews-slider">
            <!-- Review Card 1 -->
            <div class="review-card tilt-card" ref="reviewCard1">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Nos gusto mucho trabajar con Tenzoft, trabajan rapido y se encargaron
                  de entender realmente que es lo que el hotel necesitaba. Aparte de
                  crearnos el sistema nos ayudaron a entender que necesitabamos."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">
                    Website Hotel / Sistema Admistrativo
                  </p>
                  <p class="text-gray-400">Pawhouse Dog Hotel</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>

            <!-- Review Card 2 -->
            <div class="review-card tilt-card" ref="reviewCard2">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Muy buena atencion, siempre estaban atentos a nuestras dudas de como
                  ibamos a llevar a cabo el proyecto. Yo llegue con una idea y me gusto
                  que ellos nos solamente hacen el trabajo que pides. Si no que se suman
                  al proyecto y aportan ideas para que quede mejor lo que necestas. "
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">
                    Website Portafolio
                  </p>
                  <p class="text-gray-400">Mua Arquitectos</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>

            <!-- Review Card 3 -->
            <div class="review-card tilt-card" ref="reviewCard3">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Excelente tiempo de entrega, fueron muy profesionales y me ayudaron a
                  entender como funcionaba el sistema que desarollaron. Recomendado."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">
                    Website E-commerce / Sistema De Inventario
                  </p>
                  <p class="text-gray-400">La Casa Del Nicho</p>
                </div>
              </div>
              <div class="tilt-effect"></div>
            </div>

            <!-- Review Card 4 -->
            <div class="review-card tilt-card" ref="reviewCard4">
              <div class="review-content">
                <p class="text-body-large text-gray-200 mb-8">
                  "Cuandos nos asercamos con el equipo de Tenzoft, realmente no sabiamos
                  bien del todo lo que necesitabamos. Me llevo una muy buena experiencia
                  ya que no solamente vendieron por vender si no que realmente senti que
                  estaban comprometidos a ayudarme a tener un buen sistema espesializado
                  para las necesidades de mi gym."
                </p>
                <div class="review-author">
                  <p class="text-primary-light font-semibold font-nohemi text-lg">
                    Outwork Calistenics Studio
                  </p>
                  <p class="text-gray-400">Website Presentacion / Sistema De Reservas</p>
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
    <section id="contact" class="py-20 bg-dark text-white">
      <div class="section-container text-center">
        <h2 class="text-heading-1 font-bold mb-6 font-nohemi" data-aos="fade-up">
          ¿Estas listo para convertir tu vision en una realidad?
        </h2>
        <p
          class="text-body-large mb-8 max-w-2xl mx-auto font-nohemi font-light"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Iniciemos juntos tu proyecto digital
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <router-link to="/#contact" class="btn-primary">
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
      const reviewsSlider = document.querySelector(".reviews-slider");
      const cards = document.querySelectorAll(".review-card");
      const totalCards = cards.length;

      // Handle looping - normalize the index
      if (index < 0) index = totalCards - 1;
      if (index >= totalCards) index = 0;

      const cardWidth = cards[0].offsetWidth;

      reviewsSlider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });

      // Update active dot
      document.querySelectorAll(".nav-dot").forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
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
      const cards = [
        reviewCard1.value,
        reviewCard2.value,
        reviewCard3.value,
        reviewCard4.value,
      ];

      // Track the current card index and hover timer
      let currentCardIndex = 0;
      let hoverTimer = null;
      let isScrolling = false;

      // Function to handle card hover with delay
      const handleCardHover = (index) => {
        // Clear any existing timer
        if (hoverTimer) clearTimeout(hoverTimer);

        // Only proceed if it's a different card and not currently scrolling
        if (index !== currentCardIndex && !isScrolling) {
          // Set a delay before scrolling
          hoverTimer = setTimeout(() => {
            isScrolling = true;
            scrollToReview(index);

            // Update the current index and reset scrolling flag after animation completes
            setTimeout(() => {
              currentCardIndex = index;
              isScrolling = false;
            }, 500); // Match this to the scroll animation duration
          }, 400); // Delay before scrolling triggers
        }
      };

      cards.forEach((card, index) => {
        if (!card) return;

        // Add hover event listener
        card.addEventListener("mouseenter", () => {
          handleCardHover(index);
        });

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const deltaX = (x - centerX) / centerX;
          const deltaY = (y - centerY) / centerY;

          card.style.transform = `perspective(800px) rotateX(${
            -deltaY * 10
          }deg) rotateY(${deltaX * 10}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";

          // Clear hover timer when mouse leaves
          if (hoverTimer) {
            clearTimeout(hoverTimer);
            hoverTimer = null;
          }
        });
      });

      // Modify scrollToReview function to handle looping
      const reviewsSlider = document.querySelector(".reviews-slider");
      if (reviewsSlider) {
        // Initialize review slider scroll detection
        reviewsSlider.addEventListener("scroll", () => {
          const cardWidth = document.querySelector(".review-card").offsetWidth;
          const scrollPosition = reviewsSlider.scrollLeft;
          const index = Math.round(scrollPosition / cardWidth);

          document.querySelectorAll(".nav-dot").forEach((dot, i) => {
            if (i === index) {
              dot.classList.add("active");
              currentCardIndex = i; // Update current index on scroll
            } else {
              dot.classList.remove("active");
            }
          });
        });

        // Add event listener for scroll end
        reviewsSlider.addEventListener("scrollend", () => {
          isScrolling = false;
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
      scrollToReview,
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
  animation: gradient-flow 4s linear infinite;
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

/* Hero section enhancements */
.hero-section {
  min-height: calc(100vh + 100px); /* Extend 100px beyond viewport */
  padding-bottom: 120px; /* Add padding at bottom for content */
  position: relative;
  padding-top: 80px; /* Add top padding for mobile */
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh; /* Use full viewport height on mobile */
    padding-bottom: 80px; /* Reduce bottom padding on mobile */
    padding-top: 100px; /* Increase top padding to accommodate the navbar */
  }
  
  .gradient-text {
    /* Ensure gradient text works properly on smaller screens */
    display: inline;
    background-size: 200% 100%;
    padding-right: 2px; /* Slight padding to prevent text from touching */
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 90vh; /* Slightly shorter on very small screens */
    padding-bottom: 60px; /* Further reduce padding on small phones */
  }
}

.hero-fade-out {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px; /* Height of the fade-out gradient */
  background: linear-gradient(
    to bottom,
    rgba(0, 2, 21, 0) 0%,
    rgba(0, 2, 21, 0.8) 80%,
    rgba(0, 2, 21, 0.95) 100%
  );
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
.wave-container {
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
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 10px 2px rgba(35, 52, 243, 0.6),
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
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  border: 1px solid #2334f3;
  box-shadow: 0 10px 30px -5px rgba(35, 52, 243, 0.2);
}

/* Remove the gradient background effects */
.card-hover::before,
.card-hover::after {
  display: none;
}

/* Icon styling and hover effect - keep the icon color change */
.card-icon {
  color: #2334f3;
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

/* Tech icons styles */
.tech-icons-container {
  width: 100%;
  padding: 40px 0;
}

.tech-icons-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.tech-icon {
  height: 60px;
  width: 60px;
  color: #2334f3;
}

.tech-item {
  flex: 0 0 auto;
  padding: 10px;
}

/* Project cards styling */
.project-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(81, 95, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #2334f3;
  box-shadow: 0 10px 30px -5px rgba(35, 52, 243, 0.2);
}

.project-card .relative img {
  transition: transform 0.6s ease;
}

.project-card:hover .relative img {
  transform: scale(1.05);
}

.tech-tag {
  background: rgba(35, 52, 243, 0.1);
  color: #2334f3;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: 1px solid rgba(35, 52, 243, 0.2);
}

/* Ensure consistent card heights */
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card > div:last-child {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
