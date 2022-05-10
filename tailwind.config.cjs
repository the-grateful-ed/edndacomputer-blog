const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  
	theme: {
	  extend: {
		  fontFamily: {
			  sans: ['Poppins']
		  },
		container: {
			center: "true",
			margin: "1rem",
			screens: {
				lg: "1124px",
				xl: "1124px",
				"2xl": "1124px"
			},
			animation: {
				spin: "spin 10s linear infinite"
			}
		},
		typography: {
		  DEFAULT: {
			css: {
			  maxWidth: null,
			},
		  },
		},
	  },
	},
  
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
  }
  
  module.exports = config
  