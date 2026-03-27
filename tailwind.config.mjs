/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#666666',
        accent: '#f3f4f6',
      }
    },
	},
	plugins: [],
}
