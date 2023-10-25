import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.dist,
			clean: true,
			publicPath: '/',
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
