/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0a0a',
          subtle: '#111111',
          raised: '#161616',
        },
        border: {
          subtle: '#222222',
          strong: '#2e2e2e',
        },
        text: {
          primary: '#ededed',
          muted: '#9ca3af',
          faint: '#6b7280',
        },
        accent: {
          DEFAULT: '#22d3ee',
          warm: '#67e8f9',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        traffic: {
          red: '#ff5f57',
          yellow: '#febc2e',
          green: '#28c840',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        container: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
