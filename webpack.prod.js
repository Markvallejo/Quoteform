const path = require ('path')
const MiniCssExtractPlugin  = require ('mini-css-extract-plugin')

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, './src/js/index.js')],
    output: {
        path: path.resolve(__dirname, './src/js'),
        filename: './bundle.js'
    },

    module: {
        rules: [
                // loaders              
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                    'css-loader',
                ],
            },
             {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                        'css-loader', 'sass-loader'
                ]
             },
             {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            publicPath: "./images"
                        }
                    },
                    {
                        loader: 'pug-html-loader', 
                        options: { 
                            pretty: false 
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      fallback: 'file-loader',
                      name: '../../src/images/[name].[hash].[ext]',
                    }
                  }
                ]
            },
        ]
    },
     plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),
  ],
}