var express = require('express');
var bodyParser = require('body-parser')
var connectionFactory = require('./infra/connectionFactory');
var livrosDAO = require('./infra/ProdutoDao');
var expressValidator = require('express-validator');

server = express();

module.exports = function () {
  server.set('view engine', 'ejs');
  server.use(express.static('./public'));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(expressValidator());
  server.use(function (req, res, next) {
    var connection = connectionFactory();
    var livros = new livrosDAO(connection);
    req.DAO = livros;
    next();
  });
  require('./routes/produto')(server);
  require('./routes/home')(server);

  server.use( function (erro, req, res, next){
    console.log("tratando erro 500");
    res.render("erros/500", {error: erro});
  });

  server.use( function (req, res){
    console.log("Passou por aqui");
    res.render("erros/404");
  });
  return server;
};
