module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/index.html'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			colors: {
				layoutBg: '#131313',
				navBg: '#202020',
				navText: '#848484',
			},
		},
	},
	plugins: [],
};
