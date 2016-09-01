var express = require('express');
server = express();

module.exports = function () {
  server.set('view engine', 'ejs');
  server.use(express.static('./public'));
  //server.use(bodyParser)
  require('./routes/produto')(server);
  require('./routes/home')(server);

  server.use( function (erro, req, res, next){
    console.log("tratando erro 500");
    //res.send(erro);
    res.render("erros/500", {error: erro});
  });

  server.use( function (req, res){
    console.log("Passou por aqui");
    res.render("erros/404");
  });
  return server;
};
