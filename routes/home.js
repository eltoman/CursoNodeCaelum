module.exports = function (server) {
  server.get('/', function (req, res){
      console.log('Recebeu requisicao para home');
      res.render('home/index', { livros:[] });
  });
};
