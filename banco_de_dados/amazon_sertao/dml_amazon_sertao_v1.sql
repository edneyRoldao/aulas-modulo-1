
-- INSERINDO DADOS NA TABELA DE USUARIO
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("edney", "edney ronan", "edy@edy.com", "77778888");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("edeney", "edeney paul", "edy@mail.com", "45631236");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("nadine", "nadine roldao", "nadine@edy.com", "111111111");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("marjorie", "marjorie roldao", "marjorie@edy.com", "22222222");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("giselle", "giselle nogueira", "giselle@edy.com", "12347894");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("draco", "draco malfoy", "draco@edy.com", "45631236");

-- INSERINDO DADOS NA TABELA DE USUARIO
INSERT INTO tb_tipo_logradouro (descricao) VALUES ('Rua');
INSERT INTO tb_tipo_logradouro (descricao) VALUES ('Alameda');
INSERT INTO tb_tipo_logradouro (descricao) VALUES ('Avenida');
INSERT INTO tb_tipo_logradouro (descricao) VALUES ('Viela');
INSERT INTO tb_tipo_logradouro (descricao) VALUES ('Praça');

INSERT INTO tb_endereco 
	(padrao, cep, logradouro, id_tipo_logradouro, cidade, bairro, tipo_endereco, numero, UF, complemento, id_usuario)
VALUES
	(true, '02343030', 'mere marie', 1, 'Sao Paulo', 'vila cachoeira', 'residencial', 472, 'SP', 'Apto 8', 1);

INSERT INTO tb_endereco 
	(padrao, cep, logradouro, id_tipo_logradouro, cidade, bairro, tipo_endereco, numero, UF, complemento, id_usuario)
VALUES
	(true, '03245787', 'Joao das Couves', 3, 'Sao Paulo', 'vila toupeira', 'comercial', 7777, 'SP', null, 1);


INSERT INTO tb_endereco 
	(padrao, cep, logradouro, id_tipo_logradouro, cidade, bairro, tipo_endereco, numero, UF, complemento, id_usuario)
VALUES
	(true, '01265000', 'Maria das Flores', 1, 'Rio de Janeiro', 'vila da metralhadora', 'residencial', 333, 'RJ', 'morro 2', 2);

INSERT INTO tb_endereco 
	(padrao, cep, logradouro, id_tipo_logradouro, cidade, bairro, tipo_endereco, numero, UF, complemento, id_usuario)
VALUES
	(true, '02244777', 'Floriano Peixoto', 4, 'Sao Paulo', 'Santo Amaro', 'comercial', 888, 'SP', null, 2);
	




-- EXEMPLO DE DELETE
INSERT INTO tb_tipo_logradouro (descricao) VALUES ('bikera');
DELETE FROM tb_tipo_logradouro WHERE descricao = 'bikera';



-- EXEMPLO UPDATE
update tb_tipo_logradouro 
	set descricao = 'ALAMEDA'
where id = 3;

UPDATE tb_usuario 
	set nome_completo = 'Edney de Souza',
		email = 'edneysouza@gmail.com'
WHERE id = 1;		


