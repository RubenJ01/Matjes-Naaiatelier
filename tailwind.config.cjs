const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				'10%': '10%',
				'max-w-10/12': '83.333333%',
				'max-w-1/2': '50%',
			  },
			  maxWidth: {
				'1/2': '50%',
				'10/12': '83.333333%;',
			  }
		}
	},

	plugins: []
};

module.exports = config;
