drop database if exists amazon_sertao;
create database amazon_sertao;
use amazon_sertao;

-- deletando as tabelas
drop table if exists tb_endereco;
drop table if exists tb_usuario;
drop table if exists tb_tipo_logradouro;

-- criando as tabelas
create table tb_usuario (
    id              int(10)         not null AUTO_INCREMENT ,
    nome            varchar(255)    not null                ,
    nome_completo   varchar(255)                            ,
    email           varchar(100)    not null UNIQUE         ,
    telefone        varchar(100)    not null                ,
    data_criacao    TIMESTAMP       not null DEFAULT NOW()  ,
    primary key (id)
);

create table tb_tipo_logradouro (
    id          int(10)         not null AUTO_INCREMENT ,
    descricao   varchar(255)    not null UNIQUE         ,
    primary key (id)                                    
)

create table tb_endereco (
    id                  int(10)                             not null AUTO_INCREMENT ,
    padrao              boolean                             not null                ,
    cep                 varchar(10)                         not null                ,
    logradouro          varchar(255)                        not null                ,
    id_tipo_logradouro  int(10)                             not null                ,
    cidade              varchar(255)                        not null                ,
    bairro              varchar(255)                        not null                ,
    tipo_endereco       ENUM('residencial', 'comercial')    not null                ,
    numero              varchar(25)                         not null                ,
    UF                  char(2)                             not null DEFAULT 'SP'   ,
    complemento         varchar(255)                                                ,
    id_usuario          int(10)                             not null                ,
    primary key (id)                                                                ,
    FOREIGN KEY (id_usuario)            REFERENCES tb_usuario (id)                  ,
    FOREIGN KEY (id_tipo_logradouro)    REFERENCES tb_tipo_logradouro (id)
);


-- alterando estrutura das tabelas
ALTER TABLE tb_endereco ADD COLUMN nome_recado VARCHAR(255) AFTER complemento;


