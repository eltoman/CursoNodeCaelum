var express = require('../../customServer')();
var request = require('supertest')(express);
var DatabaseCleaner =  require('database-cleaner');
var connectionFactory = require('../../infra/connectionFactory');


describe('#ProdutosController', function(){

/* -- Apaga o banco inteiro a cada teste realizado
    beforeEach(function(done) {
    var databaseCleaner = new DatabaseCleaner('mysql');
    databaseCleaner.clean(express.infra.connectionFactory(), done);
    });
*/
    after(function(done) {
        var databaseCleaner = new DatabaseCleaner('mysql');
        databaseCleaner.clean(connectionFactory(), done);
    });

    it('listagem de produtos json',
        function (done){
            request.get('/produtos')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done)
        }
      );

      it('Listagen de produtos html',
          function(done){
              request.get('/produtos')
              .expect('Content-Type', /html/)
              .expect(200, done)
          }
      );

      it('Nao cadastrar Produto invalido',
          function(done){
              request.post('/produtos')
              .set('Accept', 'application/json')
              .set('Content-Type', 'application/json')
              .send({titulo:"", preco: 39, descricao: "oi"})
              .expect('Content-Type', /application\/json/, done)
              .expect(400)
          }
      );

      it('Cadastro Produto certo',
          function(done){
              request.post('/produtos')
              .set('Accept', 'application/json')
              .set('Content-Type', 'application/json')
              .send({titulo:"Produto cadastrado via teste", preco: 99.99, descricao: "descricao de um produto gravado via teste"})
              .expect('Content-Type', /application\/json/, done)
              .expect(200)
          }
      );
});
