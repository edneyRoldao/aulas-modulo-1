SELECT * FROM tb_usuario;
SELECT * FROM tb_tipo_logradouro;
SELECT * FROM tb_endereco;

-- exemplo 1
SELECT 
	nome			as 'nome usuario',
	nome_completo
	email 
FROM tb_usuario;

-- exemplo 2
SELECT bananinha.descricao FROM tb_tipo_logradouro bananinha;

-- contando os registros de uma tabela
SELECT 
	count(*)		AS 'quantidade total de enderecos'
FROM tb_endereco;


-- SOMANDO O VALOR DE UMA COLUNA
SELECT 
	sum(te.id) 			AS 'soma dos ids da tabela'
FROM tb_endereco te; 


-- JOINS
SELECT
	u.id 			,
	u.nome			,
	u.email			,
	u.telefone		,
	e.bairro		,
	e.cidade 
FROM tb_usuario u INNER JOIN tb_endereco e ON (u.id = e.id_usuario);


SELECT
	u.id 			,
	u.nome			,
	u.email			,
	u.telefone		,
	e.bairro		,
	e.cidade 		,
	e.logradouro 	,
	e.numero 		,
	e.complemento 	,
	e.cep 			,
	e.UF 			,
	tl.descricao 	AS tipo_logradouro
FROM tb_usuario u INNER JOIN tb_endereco e ON (u.id = e.id_usuario) 
				  INNER JOIN tb_tipo_logradouro tl ON (tl.id = e.id_tipo_logradouro)
WHERE tl.descricao = 'Rua' AND u.id = 1;



-- =
-- !=
-- LIMIT
-- GROUP BY

-- IN
-- ORDER BY
SELECT * FROM tb_usuario 
WHERE id IN (1, 2, 3, 5) 
ORDER BY nome_completo ASC;

SELECT * FROM tb_usuario 
WHERE id NOT IN (1, 2);


-- LIKE
-- ORDER BY
SELECT * FROM tb_usuario 
WHERE email LIKE '%edy%'; -- busca por edy em qualquer lugar

SELECT * FROM tb_usuario 
WHERE email LIKE 'edy%'; -- tudo que comeca com edy

SELECT * FROM tb_usuario WHERE email LIKE '%edy.com'; -- tudo que termina com edy.com

SELECT * FROM tb_usuario WHERE email NOT LIKE '%edy.com';


-- BETWEEN
SELECT * FROM tb_usuario WHERE id BETWEEN 3 AND 6;

SELECT * FROM tb_usuario WHERE id NOT BETWEEN 3 AND 6;


SELECT * FROM tb_endereco;


-- NOT NULL e NULL
SELECT * FROM tb_endereco WHERE complemento IS NOT NULL;
SELECT * FROM tb_endereco WHERE complemento IS NULL;

-- LIMIT
SELECT * FROM tb_usuario;
SELECT * FROM tb_usuario ORDER BY email ASC;
SELECT * FROM tb_usuario ORDER BY email DESC;

SELECT * FROM tb_usuario LIMIT 5;
SELECT * FROM tb_usuario ORDER BY email ASC LIMIT 5;
SELECT * FROM tb_usuario ORDER BY email DESC LIMIT 5;







