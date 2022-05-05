module.exports = {
  
  //关闭eslint
  lintOnSave:false,

  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        
        //路径排除掉 /api，此处不需要排除，需要携带
        // pathRewrite: { '^/api': '' },
      },
    },
  },

  //此配置是 项目打包后不生成的map文件
  productionSourceMap:false
}
