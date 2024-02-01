--
-- Arquivo gerado com SQLiteStudio v3.4.4 em qua jan 31 14:38:02 2024
--
-- Codificação de texto usada: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tabela: pedido
CREATE TABLE IF NOT EXISTS pedido (id_pedido integer PRIMARY KEY AUTOINCREMENT NOT NULL, id_usuario int, nome varchar (50), telefone varchar (50), endereco varchar (100), bairro varchar (100), cidade varchar (50), uf varchar (2), cep varchar (10), total decimal (9, 2), dt_pedido date);

-- Tabela: pedido_item
CREATE TABLE IF NOT EXISTS pedido_item(
	id_item integer primary key AUTOINCREMENT not null,
	id_pedido int,
	id_produto int,	
	qtd decimal(9,2),
	vl_unitario decimal(9,2),
	vl_total decimal(9,2)	
);

-- Tabela: produto
CREATE TABLE IF NOT EXISTS produto(
	id_produto integer primary key AUTOINCREMENT not null,
	nome varchar(50),
	descricao varchar(200),
	preco decimal(9,2),
	foto varchar(1000)
);


INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (1, 'Spicy Burguer', 'Hamburguer de 250g, queijo, tomate, alface e cebola', 24.9, 'https://jornadajs-food.s3.amazonaws.com/spicy.png');
INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (2, 'Sanduba', 'Sanduiche natural, alface, tomate, pão integral e orégano', 22, 'https://jornadajs-food.s3.amazonaws.com/sanduba.png');
INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (3, 'Super Burguer', 'Hamburguer de 300g, molho, queijo, tomate, alface e cebola', 29.9, 'https://jornadajs-food.s3.amazonaws.com/super.png');
INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (4, 'Mega', 'Hamburguer de 300g, maionese, tomate, alface, queijo e cebola', 34.9, 'https://jornadajs-food.s3.amazonaws.com/mega.png');
INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (5, 'Penne', 'Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola', 27, 'https://jornadajs-food.s3.amazonaws.com/penne.png');
INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (6, 'Fritas', 'Batata frita crocante com molho especial de maionese da casa', 14.9, 'https://jornadajs-food.s3.amazonaws.com/fritas.png');
INSERT INTO produto (id_produto, nome, descricao, preco, foto) VALUES (7, 'Coca-Cola Lata', 'Coca-cola em lata de 300ml, trincando de gelada para você', 9.9, 'https://jornadajs-food.s3.amazonaws.com/coca.png');

-- Tabela: usuario
CREATE TABLE IF NOT EXISTS usuario (id_usuario integer PRIMARY KEY AUTOINCREMENT NOT NULL, nome varchar (50), telefone varchar (100), senha varchar (100));
INSERT INTO usuario (id_usuario, nome, telefone, senha) VALUES (1, 'Heber Stein Mazutti', 'heber@teste.com.br', '');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
