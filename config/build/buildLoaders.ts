import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

import webpack from 'webpack';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { paths, isDev } = options;

	const svgLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
	const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

	const cssLoader = {
		test: /\.css$/i,
		include: paths.include,
		exclude: /node_modules/,
		use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
	};

	// const typescriptLoader = {
	// 	test: /\.tsx?$/,
	// 	use: 'ts-loader',
	// 	exclude: /node_modules/,
	// };

	return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
}
