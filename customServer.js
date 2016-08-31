var express = require('express');
server = express();

module.exports = function () {
  server.set('view engine', 'ejs');
  server.use(express.static('./public'));
  require('./routes/produto')(server);
  require('./routes/home')(server);
  server.use( function (req, res){
    console.log("Passou por aqui");
    res.render("erros/404");
  });
  return server;
};
