function ProdutoDao(connection) {
    this._connection = connection;
}

ProdutoDao.prototype.salva = function(livro, callback, callbackErro) {
    this._connection.query('INSERT INTO livros SET ?', livro, function(erro, result){
      if(erro == null){
          callback(result);
      }else{
          callbackErro(erro);
      }
    };
}

ProdutoDao.prototype.lista = function(callback, callbackErro) {
  this._connection.query('select * from livros', function(erro, result){
    if(erro == null){
        callback(result);
    }else{
        callbackErro(erro);
    }
  });
}

ProdutoDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from livros where id = ?",[id],callback);
}

module.exports = ProdutoDao;
