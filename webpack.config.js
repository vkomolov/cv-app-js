const path = require('path');
const curMode = process.env.NODE_ENV || 'development';
const isDev = curMode === 'development'; //to check the mode

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const PostCssPresetEnvPlugin = require('postcss-preset-env');

const target = isDev ? 'web' : 'browserslist';
const devtool = isDev ? 'eval-source-map' : 'nosources-source-map';
const filename = (ext) => isDev ? `[name].bundle.${ext}` : `[name].[contenthash:8].${ext}`;
const cssLoaders = (...extraLoaderArr) => {
    const loaders = [
        //it injects styles to DOM
        isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            // required for asset imports in CSS, such as url()
            options: { publicPath: "" },
        }, //turns css into js
        'css-loader',
        {
            //adds prefixes to css
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    //plugins: [PostCssPresetEnvPlugin],
                    plugins: {
                        'postcss-preset-env': {
                            browsers: 'last 3 versions',
                        },
                    },
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
        path: path.resolve(__dirname, 'dist'),
        filename: (pathData) => {
            return pathData.chunk.name === 'main' ? filename('js') : `js/[name]/${filename('js')}`;
        },
        clean: true,
        //asset which has no path in the loader settings
        assetModuleFilename: 'asset/[hash][ext][query]',
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        open: true, //open browser
        devMiddleware: {
            writeToDisk: true, // pack files to write to disk
        },
        compress: true,
        hot: true,
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "cv",  //default title, will be overwritten
            template: path.resolve(__dirname, './src', 'index.html'),
            filename: 'index.html',
            minify: {
                removeComments: !isDev,
                collapseWhitespace: !isDev,
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/asset/pData/cv.json'),
                    to: path.resolve(__dirname, 'dist/asset/pData/cv.json')
                },
                {
                    from: path.resolve(__dirname, 'src/asset/pData/VKomolov_Eng22_CV_JS.pdf'),
                    to: path.resolve(__dirname, 'dist/asset/pData/VKomolov_Eng22_CV_JS.pdf')
                },
                {
                    from: path.resolve(__dirname, 'src/asset/img/vk.jpeg'),
                    to: path.resolve(__dirname, 'dist/asset/img/vk.jpeg')
                },
/*                {
                    from: path.resolve(__dirname, 'src/asset/fonts'),
                    to: path.resolve(__dirname, 'dist/asset/fonts')
                },*/
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/' + filename('css'),
        }),
        //new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.txt$/i, // text
                type: 'asset/source'
            },
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            babelOption()
                        ],
                        /**
                         * From the docs: When set, the given directory will be used
                         * to cache the results of the loader. Future webpack builds
                         * will attempt to read from the cache to avoid needing to run
                         * the potentially expensive Babel recompilation process on each run.
                         */
                        cacheDirectory: true,
                    },
                },
            },
            //loading images
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4096 // ограничение 4kb
                    }
                },
                generator: {
                    filename: 'asset/img/[hash:8][ext][query]' // все изображения в dist/img
                }
            },
            //loading svg inline
            {
                test: /\.svg/i,
                type: 'asset/inline',
            },
            //loading fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
        ]
    }
};