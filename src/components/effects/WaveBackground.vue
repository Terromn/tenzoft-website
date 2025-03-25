<template>
  <div ref="container" class="wave-background">
    <!-- The canvas will be added here by Three.js -->
  </div>
</template>

<script>
import * as THREE from 'three';
import { onMounted, onBeforeUnmount, ref } from 'vue';

export default {
  name: 'WaveBackground',
  props: {
    particleCount: {
      type: Number,
      default: 1500
    },
    particleSize: {
      type: Number,
      default: 4
    },
    speed: {
      type: Number,
      default: 0.3
    },
    flowHeight: {
      type: Number,
      default: 200 // Percentage of viewport height the particles should flow through
    }
  },
  setup(props) {
    const container = ref(null);
    let scene, camera, renderer, particles, animationFrameId;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    
    // Brand color palette
    const colors = {
      primary: new THREE.Color(0x2334F3),   // Primary blue
      secondary: new THREE.Color(0x515FFF), // Secondary blue
      light: new THREE.Color(0xC5CAFF)      // Light blue/white
    };

    const init = () => {
      // Set up Three.js scene
      scene = new THREE.Scene();
      
      // Create a camera with expanded view to capture more of the scene
      // Use a larger far plane to ensure particles remain visible as they move
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      // Create particle system
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const sizes = [];
      const colorAttribute = [];

      // Calculate the bounds for particle positioning
      // Extended height based on flowHeight prop (percentage of viewport)
      const viewportHeight = window.innerHeight;
      const flowAreaHeight = viewportHeight * (props.flowHeight / 100);
      
      // Create particles with extended vertical distribution
      for (let i = 0; i < props.particleCount; i++) {
        const x = Math.random() * 2000 - 1000;
        // Distribute particles over a much larger vertical range
        const y = Math.random() * flowAreaHeight - (flowAreaHeight / 2);
        const z = Math.random() * 2000 - 1000;
        
        vertices.push(x, y, z);
        
        // Random sizes for particles
        sizes.push(Math.random() * props.particleSize + 1);

        // Randomly select a color from the brand palette
        let color;
        const colorRand = Math.random();
        if (colorRand < 0.4) {
          color = colors.primary;
        } else if (colorRand < 0.8) {
          color = colors.secondary;
        } else {
          color = colors.light;
        }
        
        // Add the color's RGB values
        colorAttribute.push(color.r, color.g, color.b);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colorAttribute, 3));

      // Create particle material with vertex colors enabled
      const material = new THREE.PointsMaterial({
        size: props.particleSize,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        depthWrite: false,
      });

      // Create the particle system
      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Set up renderer
      renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        premultipliedAlpha: false
      });
      renderer.setClearColor(0x000000, 0); // Set clear color with 0 alpha (fully transparent)
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.value.appendChild(renderer.domElement);

      // Add event listeners
      document.addEventListener('mousemove', onDocumentMouseMove);
      window.addEventListener('resize', onWindowResize);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      // Rotate particles based on mouse position for interactive effect
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate the particle system for fluid motion
      particles.rotation.y += props.speed * 0.002;
      
      // Add vertical oscillation to particles with color-based variations
      const positions = particles.geometry.attributes.position.array;
      const colors = particles.geometry.attributes.color.array;
      
      const now = Date.now() * 0.0001;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Extract color to determine movement pattern
        const r = colors[i];
        const g = colors[i + 1];
        
        // Calculate a unique movement pattern based on color
        // Primary color (high red) - larger wave motion
        // Secondary color (medium red, high green) - medium wave motion
        // Light color (high in all channels) - gentle wave motion
        let amplitude = 0.2;
        let frequency = 0.3;
        
        if (r > 0.8) { // Primary (deeper blue)
          amplitude = 0.35;
          frequency = 0.5;
        } else if (g > 0.35) { // Secondary (medium blue)
          amplitude = 0.25;
          frequency = 0.4;
        } // else light color keeps default values
        
        // Add oscillating wave movement
        positions[i + 1] += Math.sin((positions[i] + now) * frequency) * amplitude;
        
        // Add gentle horizontal drift for more natural movement
        positions[i] += Math.cos((positions[i + 1] + now) * 0.2) * 0.1;
        
        // Wrap particles around if they go too far down
        if (positions[i + 1] > window.innerHeight * 2) {
          positions[i + 1] = -window.innerHeight * 2;
        }
      }
      
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    onMounted(() => {
      init();
      animate();
    });

    onBeforeUnmount(() => {
      if (renderer && renderer.domElement) {
        // Remove event listeners
        document.removeEventListener('mousemove', onDocumentMouseMove);
        window.removeEventListener('resize', onWindowResize);
        
        // Stop animation
        cancelAnimationFrame(animationFrameId);
        
        // Dispose of objects to free memory
        scene.remove(particles);
        particles.geometry.dispose();
        particles.material.dispose();
        renderer.dispose();
        
        // Remove canvas
        if (container.value && container.value.contains(renderer.domElement)) {
          container.value.removeChild(renderer.domElement);
        }
      }
    });

    return { container };
  }
};
</script>

<style scoped>
.wave-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible; /* Allow particles to be visible outside bounds */
  z-index: 0;
}
</style> 