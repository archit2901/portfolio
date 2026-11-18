/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        desk: v('desk'),
        plate: v('plate'),
        raised: v('raised'),
        sunk: v('sunk'),
        seam: v('seam'),
        ink: {
          DEFAULT: v('ink'),
          2: v('ink-2'),
          3: v('ink-3'),
        },
        key: {
          DEFAULT: v('key'),
          legend: v('key-legend'),
        },
        accent: {
          DEFAULT: v('accent'),
          legend: v('accent-legend'),
          text: v('accent-text'),
        },
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        plate: '82rem',
        measure: '68ch',
      },
    },
  },
  plugins: [],
};
