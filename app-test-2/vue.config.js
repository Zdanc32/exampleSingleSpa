let configureWebpack, css;

if (process.env.NODE_ENV === 'production') {
  configureWebpack = config => {
    config.output.filename = '[name].js';
    config.output.chunkFilename = '[name].js';
  };
  css = {
    extract: {
      filename: '[name].css',
    },
  };
} else {
  configureWebpack = () => {};
  css = {};
}

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  configureWebpack: configureWebpack,
  css: css
};