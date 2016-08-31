drop database casadocodigo;
create database casadocodigo;
use casadocodigo;

CREATE TABLE livros (
  id int(11) NOT NULL AUTO_INCREMENT,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (id)
);

insert into livros(titulo, descricao, preco) values('Começando com Node.js', 'Livro introdutório sobre Node.js', 39.90);
insert into livros(titulo, descricao, preco) values('Javascript intermediário', 'Segundo livro sobre Javascript', 39.80);
insert into livros(titulo, descricao, preco) values('Métodos ágeis', 'Livro sobre Agile abrangendo processos e práticas', 39.70);
