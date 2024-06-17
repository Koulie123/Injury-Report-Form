const path = require('path');

module.exports = {
  mode: development,
  entry: './src/script.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',

    }),

  ],

 module: {

   rules: [

     {

       test: /\.css$/i,

       use: ['style-loader', 'css-loader'],

     },
     {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

   ],

 },
};