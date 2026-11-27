/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-blue-100', 'text-blue-800',
    'bg-green-100', 'text-green-800',
    'bg-purple-100', 'text-purple-800'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
