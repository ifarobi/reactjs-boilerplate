var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var appConfig = require('./config/app.js');
var webpackConfig = require('./config/webpack/development.js');

var server = new WebpackDevServer(webpack(webpackConfig), {
  hot: true,
  headers : {
    "x-om-telolet-om" : "telolet"
  },
  publicPath : webpackConfig.output.publicPath,
  historyApiFallback : true
});

server.listen(appConfig.port, appConfig.host, function(err){
  if(err) console.error(err);

  console.log('Listening to ?:?', appConfig.host, appConfig.port);
});
