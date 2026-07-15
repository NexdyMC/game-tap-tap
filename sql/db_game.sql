
CREATE DATABASE db_game_tap;

USE db_game_tap;

CREATE TABLE tb_point (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(30),
    gugus VARCHAR(20),
    poin INT
);

INSERT INTO tb_point (nama, gugus, poin) 
VALUES ('Nexdy Experience', 'Script JS', 250);

SELECT * FROM tb_point;