module.exports = {
    devServer: {
        open: true,
        host: 'localhost',  // 設置主機地址
        port: 8080,         // 設置默認埠號
        https: false,
        //以上的ip和埠號是我們本機的;下面為需要跨域的
        proxy: {    //配置跨域
            '/backend': {
                target: 'http://localhost:40001/wireless-final-backend/apis/',   //這裡後台的地址模擬的，應該填寫真實的後台api
                changOrigin: true,  //允許跨域
                pathRewrite: {
                    '^/backend': '' //請求的時候使用這個api就可以
                }
            }

        }
    }
};