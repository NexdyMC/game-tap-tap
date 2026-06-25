
CREATE DATABASE db_game;

USE db_game;

CREATE TABLE tb_tappoin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(30),
    gugus VARCHAR(20),
    poin INT
);

INSERT INTO tb_tappoin (nama, gugus, poin) 
VALUES ('Nexdy Experience', 'Script JS', 250);

SELECT * FROM tb_tappoin;