module.exports = {

    devServer: {
        // host:'localhost',
        // post:8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    lintOnSave:false ,     //eslint检查
    productionSourceMap:true,
    chainWebpack:(config)=>{
      config.plugins.delete('prefetch');
    }
}