/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        encre: '#1C1C1E',
        corail: {
          DEFAULT: '#E8634A',
          hover: '#D25139',
          light: '#FCECE8',
          glow: 'rgba(232, 99, 74, 0.25)',
        },
        neige: '#FAFAFA',
        graphite: '#2D2D2D',
        warmgrey: '#F0EFEA',
        muted: '#71717A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
