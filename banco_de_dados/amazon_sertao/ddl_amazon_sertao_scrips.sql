drop database if exists amazon_sertao;
create database amazon_sertao;
use amazon_sertao;

-- deletando as tabelas
drop table if exists tb_usuario;

-- criando as tabelas
create table tb_usuario (
    id              int(10)         not null AUTO_INCREMENT ,
    nome            varchar(255)    not null                ,
    nome_completo   varchar(255)                            ,
    endereco        varchar(500)    not null                ,
    email           varchar(100)    not null                ,
    telefone        varchar(100)    not null                ,
    primary key (id)
);
