const path = require('path');
const curMode = process.env.NODE_ENV || 'development';
const isDev = curMode === 'development'; //to check the mode

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const PostCssPresetEnvPlugin = require('postcss-preset-env');

const target = isDev ? 'web' : 'browserslist';
const devtool = isDev ? 'source-map' : undefined;

const filename = (ext) => isDev ? `[name].bundle.${ext}` : `[name].[contenthash].${ext}`;
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
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        return `npm.${packageName.replace('@', '')}`;
                    }
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
        main: './index.js',
        App: '/containers/App/App.js',
        AsideBar: '/containers/AsideBar/AsideBar.js',
        ContentBar: '/containers/ContentBar/ContentBar.js',
        AlertBlock: '/components/AlertBlock/AlertBlock.js',
        AsideContent: '/components/AsideContent/AsideContent.js',
        AsideItem: '/components/AsideItem/AsideItem.js',
        Component: '/components/Component/Component.js',
        ContentItem: '/components/ContentItem/ContentItem.js',
        GraphBlock: '/components/GraphBlock/GraphBlock',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: optimization(),
    devServer: {
        port: 9000,
        hot: true,
        static: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Vadim Komolov CV",  //default title, will be overwritten
            template: path.resolve(__dirname, './src', 'index.html'),
            minify: {
                collapseWhitespace: !isDev,
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img/cv.ico'),
                    to: path.resolve(__dirname, 'dist/cv.ico')
                },
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
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'

            },
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders("sass-loader" )
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test:   /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            babelOption()
                        ],
                    }
                }
            },
/*            {
                test:   /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            babelOption('@babel/preset-typescript')
                        ],
                    }
                }
            },*/
/*            {
                test:   /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            babelOption('@babel/preset-react')
                        ],
                    }
                }
            },*/
/*            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: ['file-loader'],
            },*/
/*            {
                test: /\.xml$/, //loader for xml files
                use: ['xml-loader']
            },*/
/*            {
                test: /\.csv$/, //loader for csv files
                use: ['csv-loader']
            }*/
        ]
    }
};