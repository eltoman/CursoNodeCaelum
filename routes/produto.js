var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function (server) {
  server.get('/produtos', function (req, res, next){
      console.log('Recebeu requisicao de produtos');
      var connection = connectionFactory();
      var listaLivrosDAO = new ProdutoDao(connection);
/*
      var listaLivrosDAO = require('../infra/listaProdutos')(connection);
*/
      listaLivrosDAO.lista(
        function (result) {
          res.render('produtos/lista', {lista: result});
        }, function (erro) {
            next(erro);
        }
      );
    connection.end();
  });
  server.post('/produtos', function (req, res, next){
      console.log('Recebeu requisicao de gravacao de produtos');
      var livro = req.body;
      var connection = connectionFactory();
      var listaLivrosDAO = new ProdutoDao(connection);
      listaLivrosDAO.salva(livro,
        function (result) {
          res.render('produtos/lista', {lista: result});
        }, function (erro) {
            next(erro);
        }
      );
    connection.end();
  });
  server.get('/produtos/form', function(req, res, next){
      res.render('produtos/form',
      {
        validationErrors: [],
        produto : {}
      }
    );
  });
};
