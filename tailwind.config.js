
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eggshell: '#F9F8F1',
        ocean: '#00247D',
        madder: '#A51931',
        silk: '#D4AF37',
        forest: '#1B4332',
        damkhamao: '#1B1B1B',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        premium: '0.3em',
      },
    },
  },
  plugins: [],
}
