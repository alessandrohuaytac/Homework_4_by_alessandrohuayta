CREATE database pokedex;
use pokedex;

CREATE TABLE pokemon (
    id int NOT NULL AUTO_INCREMENT,
    pokemon_name varchar(255) NOT NULL,
    altura float NOT NULL,
    categoria varchar(255) NOT NULL,
    peso float NOT NULL,
    habilidad varchar(255) NOT NULL,
    tipo varchar(255) NOT NULL,
    url varchar(1000) NOT NULL,
    created_date datetime,
    modified_date datetime,
    PRIMARY KEY (id)
);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(1,'Pikachu',0.4, 'Raton',6, 'Electricidad Estatica', 'Electrico','https://imagenpng.com/wp-content/uploads/2016/09/Pikachu-png-0.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(2,'Charmander',0.61, 'Lizard',6, 'Blaze', 'Fire','https://pm1.narvii.com/6585/da03f1a6cce4d6287e5b13f9c3b7712c044615a5_hq.jpg', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(3,'Bulbasaur',0.62, 'Lizard',6.9, 'Overgrow', 'Grass','https://culturageek.com.ar/wp-content/uploads/2017/02/001Bulbasaur_AG_anime.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(4,'Squirtle',0.51, 'Tiny Turtle',8.98, 'Torrent', 'Water','https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(5,'Diglet',0.024, 'Mole',0.81, 'Sand Veil', 'Ground','https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(6,'Machop',0.8, 'Superpower',19.5, 'Guts', 'Fighting','https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(7,'Geodude',0.4, 'Rock',20, 'Rock Head', 'Rock','https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(8,'Gengar',1.5, 'Shadow',40.5, 'Cursed Body', 'Ghost','https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(9,'Totodile',0.6, 'Big law',9.5, 'Torrent', 'Water','https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png', CURRENT_TIMESTAMP(), NULL);

INSERT INTO pokemon(id, pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date)
VALUES(10,'Sceptile',1.7, 'Fores',52.2, 'Overgrow', 'Grass','https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png', CURRENT_TIMESTAMP(), NULL);
