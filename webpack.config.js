const path = require('path');
const isDev = process.env.NODE_ENV === 'development'; //to check the mode

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');


const filename = (ext) => isDev ? `[name].bundle.${ext}` : `[name].[fullhash].${ext}`;
const cssLoaders = (extraLoader) => {
    const loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader'
    ]; //from right to left

    if (extraLoader) {
        loaders.push(extraLoader);
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
        splitChunks: {
            chunks: "all"
        }
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
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        /*filename: '[name].bundle.js',*/
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.css', '.scss'],   //can write filenames without extensions
        /*alias: {
            "@models": path.resolve(__dirname, "./models/"),
            "@": path.resolve(__dirname, 'src'),
            "@assets": path.resolve(__dirname,"./assets/")
        }*/
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "cv app VKomolov",  //default title, will be overwritten
            template: './index.html',
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
                    from: path.resolve(__dirname, 'src/assets/json/cv.json'),
                    to: path.resolve(__dirname, 'dist/assets/json/cv.json')
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
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader" )
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                            loader: 'file-loader',
                        }
                    ],
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