const path = require('path');
const curMode = process.env.NODE_ENV || 'development';
const isDev = curMode === 'development'; //to check the mode

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const PostCssPresetEnvPlugin = require('postcss-preset-env');

const target = isDev ? 'web' : 'browserslist';
const devtool = isDev ? 'source-map' : undefined;

const filename = (ext) => isDev ? `[name].bundle.${ext}` : `[name].[contenthash:8].${ext}`;
const cssLoaders = (...extraLoaderArr) => {
    const loaders = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [PostCssPresetEnvPlugin],
                }
            }
        },
    ]; //from right to left

    if (extraLoaderArr.length) {
        extraLoaderArr.forEach(loader => loaders.push(loader));
    }

    return loaders;
};
const babelOption = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
        ],
    };
    if (preset) {
        options.presets.push(preset);
    }

    return options;
};
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
                    chunks: "all",
                }
            }
        },
        moduleIds: 'deterministic'
    };
    if (!isDev) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ]
    }
    return config;
};


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: curMode,
    target,
    devtool,
    entry: {
        main: path.join(__dirname, 'src', 'index.js'),
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        //assets which has no path in the loader settings
        assetModuleFilename: 'asset/[hash][ext][query]',
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        open: true,
        compress: true,
        hot: true,
        watchFiles: path.resolve(__dirname, 'src'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Vadim Komolov CV",  //default title, will be overwritten
            template: path.resolve(__dirname, './src', 'index.html'),
            filename: 'index.html',
            minify: {
                removeComments: !isDev,
                collapseWhitespace: !isDev,
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/pData/cv.json'),
                    to: path.resolve(__dirname, 'dist/assets/pData/cv.json')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/pData/VKomolov_Eng22_CV_JS.pdf'),
                    to: path.resolve(__dirname, 'dist/assets/pData/VKomolov_Eng22_CV_JS.pdf')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/vk.jpeg'),
                    to: path.resolve(__dirname, 'dist/assets/img/vk.jpeg')
                },
/*                {
                    from: path.resolve(__dirname, 'src/assets/fonts'),
                    to: path.resolve(__dirname, 'dist/assets/fonts')
                },*/
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/' + filename('css'),
        }),
    ],
    module: {
        rules: [
            //loading html
            {
                test: /\.html$/i,
                use: 'html-loader'

            },
            //loading css
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            //loading scss
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders("sass-loader" )
            },
            //loading js
            {
                test:   /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        babelOption()
                    ],
                },
                type: 'javascript/auto',
            },
            //loading images
            {
                test: /\.(jpe?g|png|webp|gif)/i,
                type: 'asset/resource',
            },
            //loading svg inline
            {
                test: /\.svg/i,
                type: 'asset/inline',
            },
            //loading fonts
            {
                test: /\.(ttf|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `${path.join(__dirname, 'dist/assets/fonts/')}[name].[ext]`,
                }
            },
            /*{
                test: /\.(ttf|eot|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `./assets/fonts/[name].[ext]`,
                            //publicPath: "assets",
                        }
                    },
                ],
                type: 'javascript/auto',
            },*/

/*            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: ['file-loader'],
            },*/
        ]
    }
};