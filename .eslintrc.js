module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['standard-with-typescript', 'plugin:react/recommended'],
	parser: '@typescript-eslint/parser',

	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		parser: '@typescript-eslint/parser',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['.eslintrc.js', 'tailwind.config.ts', 'webpack.config.ts', 'postcss.config.ts', 'config.ts'],
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'react/jsx-indent': ['error', 2],
		'react/jsx-indent-props': ['error', 2],
		'indent': [0, 'tab'],
		'no-tabs': 1,
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/semi': ['off'],
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-param-reassign': 'off',
		'no-undef': 'off',
		'react/no-array-index-key': 'off',
		'arrow-body-style': 'off',
		'react/function-component-definition': 'off',
		'max-len': [
			'error',
			{
				ignoreComments: true,
				code: 100,
			},
		],
		"@typescript-eslint/strict-boolean-expressions": [
			"warn",
			{
				"allowString": true,
				"allowNumber": true,
				"allowNullableObject": true,
				"allowNullableBoolean": true,
				"allowNullableNumber": false,
				"allowNullableString": true,
				"allowAny": false
			}
		],
	},
};
