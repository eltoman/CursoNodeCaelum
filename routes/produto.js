var mysql = require('mysql');

module.exports = function (server) {
  server.get('/produtos', function (req, res){
      console.log('Recebeu requisicao de produtos');

      var connection = mysql.createConnection({
          host : 'localhost',
          user: 'root',
          password: '',
          database: 'casadocodigo'
      });

      connection.query('select * from livros', function(err, result, fields) {
          //res.send(result);
          res.render('produtos/lista', {lista: result});
      }
    );
    connection.end();
  });
};
