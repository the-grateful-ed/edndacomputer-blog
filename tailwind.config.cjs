const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  
	theme: {
	  extend: {
		container: {
			center: "true",
			margin: "1rem",
			screens: {
				lg: "1124px",
				xl: "1124px",
				"2xl": "1124px"
			},
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
  