/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Custom text sizes
        'landing': ['5.5rem', { lineHeight: '1.2', fontWeight: '900' }],  // 88px
        'heading-1': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],  // 40px
        'heading-2': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],    // 32px
        'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 28px
        'body-large': ['1.15rem', { lineHeight: '1.6' }],                 // 18px
        'body': ['1rem', { lineHeight: '1.5' }],                           // 16px
        'body-small': ['0.875rem', { lineHeight: '1.5' }],                 // 14px
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        // Add any additional custom fonts here
        'nohemi': ['Nohemi', 'sans-serif'],
        'moniqa': ['Moniqa', 'sans-serif'],
        'freefat': ['FreeFat', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '3rem',      // You can adjust this value (default is 0.75rem)
        '2xl': '1.5rem',   // You can adjust this value
        '3xl': '2rem',     // Even more rounded
        'full': '9999px',
      },
      colors: {
        // Single colors (no shades)
        primary: '#2334F3',  // Your original primary color
        secondary: '#515FFF', // Your original secondary color
        dark: '#000215',     // Your original dark color
        light: '#ECEFF4',    // Light color (light gray)
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 