var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res){
    console.log('Recebeu requisicao home');
    res.send('<h1>Home</h1>');
});

app.get('/produtos', function (req, res){
    console.log('Recebeu requisicao de produtos');
    //res.send('<h1>Listagem de produtos</h1>');
    lista = [{titulo: 'O menino do pijama listrado', preco: 'R$37,00', descricao : 'Um livro ai'} ];
    res.render('produtos/lista', { lista });
});

var server = app.listen(3000, function () {
    console.log("Servidor rodando");
});
