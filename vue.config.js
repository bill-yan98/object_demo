const IS_PROD = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isBundleAnalyzer = process.argv.includes('bundle-analyzer')

const entry = { index: { entry: '/src/main.ts' } }

module.exports = {
  publicPath: IS_PROD ? './' : '/',
  outputDir: 'dist',
  pages: entry,
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  // devServer: {
  //     proxy: {
  //       "/api": {
  //         target:"https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
  //         secure: false,
  //         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
  //         // ws: true, // 是否启用websockets
  //         pathRewrite: {
  //           "^/api": "/"
  //         }
  //       }
  //     }
  // },
  chainWebpack: config => {
    // 规则
    config.module
    .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 10240 }))
    // 打包分析
    if (isBundleAnalyzer) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
    }
  }
}
