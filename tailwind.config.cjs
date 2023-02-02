/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkBG: "#2B2B2B",
				lightBG: "#F3F3F3 ",
			},
		},
	},
	plugins: [],
};
