const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'IWD 2024',
    themeColor: '#3D7FF5',
    msTileColor: '#3D7FF5',
    short_name: 'IWD',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
});
