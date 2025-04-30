const path = require('path');
const curMode = process.env.NODE_ENV || 'development';
const isDev = curMode === 'development';

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const target = isDev ? 'web' : 'browserslist';
const devtool = isDev ? 'eval-source-map' : 'source-map';
const filename = (ext) => (isDev ? `[name].bundle.${ext}` : `[name].[contenthash:8].${ext}`);

// CSS обработчики
const cssLoaders = (extra) => {
    const loaders = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    // Используем актуальный синтаксис для browserslist
                    plugins: [
                        ['postcss-preset-env', {
                            browserslist: 'last 3 versions', // Можно использовать 'browserslist' или свой конфиг
                        }]
                    ]
                }
            }
        }
    ];

    if (extra) loaders.push(extra); // Для дополнительных настроек, например, для sass
    return loaders;
};

// Оптимизация для разных режимов
const optimization = () => {
    const config = {
        runtimeChunk: 'single',
        splitChunks: {
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                    chunks: 'all'
                }
            }
        },
        moduleIds: 'deterministic'
    };

    if (!isDev) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
        ];
    }

    return config;
};

// Webpack конфигурация
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: curMode,
    target,
    devtool,
    entry: {
        main: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: (pathData) => (pathData.chunk.name === 'main' ? filename('js') : `js/[name]/${filename('js')}`),
        clean: true,
        assetModuleFilename: 'asset/[hash][ext][query]'
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        open: true,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        devMiddleware: {
            writeToDisk: isDev ? false : true, // Можно включить запись на диск только в режиме продакшн
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'cv',
            template: path.resolve(__dirname, './src', 'index.html'),
            filename: 'index.html',
            minify: !isDev && {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/asset'),
                    to: path.resolve(__dirname, 'dist/asset')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/' + filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.txt$/i,
                type: 'asset/source'
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders({
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'), // Указание правильной реализации sass
                    }
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4096
                    }
                },
                generator: {
                    filename: 'asset/img/[hash:8][ext][query]'
                }
            },
            {
                test: /\.svg$/i,
                type: 'asset/inline'
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    }
};