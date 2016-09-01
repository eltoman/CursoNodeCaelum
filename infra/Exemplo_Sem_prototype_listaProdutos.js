// implementacao utilizando construtores
/*
function listaProdutos(conexao){
    this._connection = conexao;
};
listaProdutos.prototype.lista = function (callback) {
    this.conexao.query('select * from livros',
        function(error, result){
            callback(result);
        }
    );
};
*/

listaProdutos = function (callback) {
    this.conexao.query('select * from livros',
        function(error, result){
            callback(result);
        }
    );
};

// implementacao utilizando construtores
//module.exports = listaProdutos;

module.exports = function(conexao){
  return {
    lista: listaProdutos,
    conexao: conexao
  }
}
