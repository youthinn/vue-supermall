module.exports = {
  transpileDependencies: true,
  // 配置文件别名
  configureWebpack: {
    resolve: {
      alias: {
        // 'scr':'@' vue cli3已经默认配置了这个
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
