/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ipink': '#c4186e',
				'ilite-pink': '#ff78b9',
				'ilite-pink2': '#ff8fc5',
				'igrey': '#1d2025',
				'islate': '#2e2e2e'
			}
		},
	},
	plugins: [],
}
