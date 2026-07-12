/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Pretendard Variable', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        common: { 0: '#ffffff', 100: '#000000' },
        grey: { 600: '#6c757f', 700: '#4f5862', 800: '#343c48' },
        violet: { 300: '#a87ef3' },
        accent: { green: '#34c759' },
        label: {
          inverse: '#ffffff',
          default: '#1a1e26',
          strong: '#343c48',
          subtle: '#6c757f',
          muted: '#8c959e',
          disabled: '#d2d6cf',
        },
        line: { subtle: '#f3f4f2' },
      },
      borderRadius: {
        'c-md': '8px',
        'c-lg': '10px',
        'c-xl': '12px',
        'c-2xl': '16px',
        'c-full': '999px',
        'box-md': '16px',
        'box-lg': '20px',
        'box-xl': '24px',
      },
      boxShadow: {
        glow: 'inset 0px 4px 60px 0px rgba(122,75,243,0.6), inset 0px 40px 60px 0px rgba(44,125,240,0.2)',
      },
      backgroundImage: {
        'ambient':
          'radial-gradient(135% 88% at 50% -12%, #46597a 0%, #35435c 20%, #232d3d 40%, #12161f 60%, #090b0f 70%, #040608 75%, #000000 80%)',
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 1.4s linear infinite',
        'pulse-glow': 'pulse-glow 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
