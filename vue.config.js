const path = require('path')
const webpack = require('webpack')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page'
    }
  },
  configureWebpack: {
    performance: {
      hints: "warning", // 枚举
      maxAssetSize: 30000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
      assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
      })
    ]
  },
  devServer: {
    //transpileDependencies: true,
    // host: 'localhost', // 允许外部ip访问
    port: 8081, // 端口
    https: false, // 启用https
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9092',
        changeOrigin: true, // 允许websockets跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    } // 代理转发配置，用于调试环境
  },
  runtimeCompiler:true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap:false, // 去掉不要.map文件
  publicPath:'./',
  outputDir:'dist',
  lintOnSave:false, // 是否在开发环境下通过 eslint-loader
  // 第三方插件配置
  pluginOptions: {}
}
