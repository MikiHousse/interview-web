import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const { paths, isDev, project } = options;
	const isProd = !isDev;

	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),

		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__PROJECT__: JSON.stringify(project),
		}),

		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: 'write-references',
			},
		}),
	];

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		);
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
		);
	}

	return plugins;
}