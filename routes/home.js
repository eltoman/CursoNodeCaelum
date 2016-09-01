var connectionFactory = require('../infra/connectionFactory');

module.exports = function (server) {
  server.get('/', function (req, res){
      console.log('Recebeu requisicao para home');
      var connection = connectionFactory();
      connection.query('select * from livros', function(err, result, fields) {
          res.render('home/index', {livros: result});
        });
  });
};
