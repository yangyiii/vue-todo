module.exports = (isDev) => {
    return {
        preserveWhitespace: true,
        extractCSS: !isDev,  //把vue文件里的css打包放在单独打包出来的css文件中
        cssModules: {
            localIdentName: '[path]-[name]-[hash:base64:5]',
            camelCase: true
        },
        hotReload: true,  //热重载（不包括css的热重载)
        preLoader: {
        
        }
    }
}