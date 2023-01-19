const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //추가
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    name: 'webpack-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게
    resolve:{
        extensions:['.js','.jsx']
    },
    entry:  //제일 중요!
        './webpack/src/index.jsx',
    
    output: {
        path: path.join(__dirname,'docs'), // './dist'의 절대 경로를 리턴합니다.
        filename: 'app.js',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html")
        }),
      new  CleanWebpackPlugin()
    ]
        
    ,
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            
        },
        {
            test:/\.css$/, //정규식 표현식, 일단 외워놓으세요
            use:['style-loader','css-loader'] // 뒤에있는 것부터 실행되기 때문에 꼭 css-loader를 2번째에 넣어줍니다.
        }
    ],
        
    }

}