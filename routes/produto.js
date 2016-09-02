
module.exports = function (server) {
  server.get('/produtos', function (req, res, next){
      console.log('Recebeu requisicao de produtos');
      req.DAO.lista(
        function (result) {
          res.format({
              html: function(){
                  res.render('produtos/lista', {lista: result});
              },
              json: function(){
                  res.json(result);
              }
          });
        }, function (erro) {
            next(erro);
        }
      );
  });
  server.post('/produtos', function (req, res, next){
      console.log('Recebeu requisicao de gravacao de produtos');
      var livro = req.body;
      req.assert('titulo', 'é obrigatorio').notEmpty();
      req.assert('preco', 'é um numero obrigatorio').isFloat();
      req.assert('descricao', 'é  obrigatorio').notEmpty();
      var erros = req.validationErrors();
      if(!erros){
          req.DAO.salva(livro,
            function (result) {
              res.format({
                  html: function(){
                    res.render('produtos/salvo');
                  },
                  json: function(){
                      resultado = {
                          id: result.insertId,
                      };
                      res.json(resultado);
                  }
              });
            }, function (erro) {
                next(erro);
            }
          );
      }else{
        console.log('tratamento de erro de validacao');
          res.format({
              html: function(){
                res.status(400).render('produtos/form',
                {
                  validationErrors: erros,
                  produto: livro
                });
              },
              json: function(){
                  res.status(400).json(erros);
              }
          });
      }
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
