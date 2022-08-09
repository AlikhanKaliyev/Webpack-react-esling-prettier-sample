const path = require('path');
module.exports = {
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"index.bundle.js"
    },
    devServer: {
        //....//
        static: {                               
          directory: path.join(__dirname, './'),  
          watch: true
        }
     },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
              }
        ]
    }
}