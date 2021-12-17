module.exports = {
    publicPath: '/wireless-final',
    devServer: {
        open: true,
        host: 'localhost',  // 設置主機地址
        port: 8080,         // 設置默認埠號
        https: false,
        disableHostCheck: true,
        //以上的ip和埠號是我們本機的;下面為需要跨域的
    }
};
