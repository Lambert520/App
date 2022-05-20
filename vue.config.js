module.exports = {
  
  //关闭eslint
  lintOnSave:false,

  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        
        //向后端请求的时候路径排除掉 /api，但是前端显示的请求信息还是加上的（此处不需要排除，因为后端需要 /api）
        // pathRewrite: { '^/api': '' },
      },
    },
    host: 'localhost',
    port: 8081,
  },

  //此配置是 项目打包后不生成的map文件
  productionSourceMap:false
}
