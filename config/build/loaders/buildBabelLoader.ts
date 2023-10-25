import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
	isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
	const idProd = !isDev;
	return {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
				plugins: [
					[
						'@babel/plugin-transform-typescript',
						{
							isTsx,
						},
					],
					'@babel/plugin-transform-runtime',
					isDev && require.resolve('react-refresh/babel'),
				].filter(Boolean),
			},
		},
	};
}
