module.exports = function (server) {
  server.get('/promocoes/form', function (req, res, next){
      console.log('promocoes GET Recebeu requisicao');
      req.DAO.lista(
        function (result) {
          res.format({
              html: function(){
                  res.render('promocoes/form', {lista: result});
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

};
