var express = require('../../customServer')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
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
});
