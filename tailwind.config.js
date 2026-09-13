/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark':    '#222222',
        'brand-darker':  '#1C1C1C',
        'brand-card':    '#2D2D2D',
        'brand-light':   '#E4E5FC',
        'accent':        '#4F46E5',
        'accent-hover':  '#4338CA',
        'accent-light':  '#525CEB',
        'yellow-accent': '#FDE047',
        'text-muted':    '#D1D5DB',
        'text-dark':     '#111827',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'card':    '8px',
        'card-lg': '12px',
      },
      backgroundImage: {
        'hero': "url('/assets/hero_bg.png')",
      },
    },
  },
  plugins: [],
};
