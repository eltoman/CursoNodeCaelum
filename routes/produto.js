
module.exports = function (server) {
  server.get('/produtos', function (req, res, next){
      console.log('Recebeu requisicao de produtos');
/*
      var listaLivrosDAO = require('../infra/listaProdutos')(connection);
*/
      req.DAO.lista(
        function (result) {
          res.render('produtos/lista', {lista: result});
        }, function (erro) {
            next(erro);
        }
      );
  });
  server.post('/produtos', function (req, res, next){
      console.log('Recebeu requisicao de gravacao de produtos');
      var livro = req.body;
      req.DAO.salva(livro,
        function (result) {
          //res.render('produtos/lista', {lista: result, message: 'Produto salvo com sucesso!'});
          res.render('produtos/salvo');
        }, function (erro) {
            next(erro);
        }
      );
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
