/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "1280px",
			// => @media (min-width:1280px) { ... }
		},
		extend: {
			colors: {
				projectBlack: "#2B2B2B",
				projectWhite: "#Ffffff",
				projectLightGray: "#F3F3F3",
				projectGrey: "#A7A7A7",
				projectBlue: "#4DB8CC",
				projectPurple: "#A242D1",
			},
			fontFamily: {
				sans: ["Outfit", "sans-serif"],
				serif: ["Roboto Serif", "serif"],
			},
		},
	},
	plugins: [],
};
