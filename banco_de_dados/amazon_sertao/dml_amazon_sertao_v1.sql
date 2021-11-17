-- inserindo dados nas tabelas do database: amazon_sertao
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("edney", "edney ronan", "edy@edy.com", "77778888");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("nadine", "edney ronan", "edy@edy.com", "77778888");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("marjorie", "edney ronan", "edy@edy.com", "77778888");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("giselle", "edney ronan", "edy@edy.com", "77778888");
INSERT INTO tb_usuario (nome, nome_completo, email, telefone) VALUES ("draco", "edney ronan", "edy@edy.com", "77778888");

INSERT INTO tb_endereco (padrao, cep, logradouro, cidade, bairro, tipo_logradouro, numero, UF, id_usuario)
VALUES (true, '02343030', 'mere marie', 'Sao Paulo', 'vila do chaves', 'rua', '472', 'SP', 1);

INSERT INTO tb_endereco (padrao, cep, logradouro, cidade, bairro, tipo_logradouro, numero, UF, id_usuario)
VALUES (true, '0215454', 'joao das couves', 'Sao Paulo', 'vila do chaves', 'rua', '33', 'SP', 1);

INSERT INTO tb_endereco (padrao, cep, logradouro, cidade, bairro, tipo_logradouro, numero, UF, id_usuario)
VALUES (true, '45751545', 'maria maria', 'Sao Paulo', 'vila do chaves', 'rua', '123', 'RJ', 1);

INSERT INTO tb_endereco (padrao, cep, logradouro, cidade, bairro, tipo_logradouro, numero, UF, id_usuario)
VALUES (true, '5555', 'mere MERE', 'Sao Paulo', 'vila do chaves', 'rua', '472', 'SP', 2);

INSERT INTO tb_endereco (padrao, cep, logradouro, cidade, bairro, tipo_logradouro, numero, UF, id_usuario)
VALUES (true, '333333', 'mere marie', 'Sao Paulo', 'vila do chaves', 'rua', '472', 'SP', 2);

INSERT INTO tb_endereco (padrao, cep, logradouro, cidade, bairro, tipo_logradouro, numero, UF, id_usuario)
VALUES (true, '7777777', 'mere marie', 'Sao Paulo', 'vila do chaves', 'rua', '472', 'SP', 3);
