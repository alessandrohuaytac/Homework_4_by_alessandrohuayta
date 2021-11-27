const mysql = require('mysql');
const express = require('express');


var app = express();

app.use(express.json());
var cors = require('cors');

app.use(cors());



app.get('/pokemons', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });

    connection.connect();
  
    var myQuery = " SELECT id, pokemon_name, altura, categoria, peso, habilidad, tipo, url FROM pokemon WHERE 1 = 1";
    var myValues =[];
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });

app.get('/pokemons/:id', function(req, res){

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
  
    connection.connect();

    var myQuery = " SELECT id, pokemon_name, altura, categoria, peso, habilidad, tipo, url FROM pokemon "+
                  " WHERE id = ? ";
    var myValues = [req.params.id];
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      
      res.send(results[0]);
  
      connection.end();
    });
  });

app.post('/pokemons', function(req, res){

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'pokedex'
});

connection.connect();

var myQuery =   " INSERT INTO pokemon(pokemon_name, altura, categoria, peso, habilidad, tipo, url,created_date, modified_date) " +
                " VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW()); ";

var myValues = [req.body.pokemon_name, req.body.altura, req.body.categoria, req.body.peso, req.body.habilidad, req.body.tipo, req.body.url];

connection.query(myQuery, myValues, function(error, results, fields){
  
    if (error) throw error; 
  
    res.send(results);

    connection.end();
});
});

app.put('/pokemons/:id', function(req, res){
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'utec',
  password: '1234567890',
  database: 'pokedex'
});

connection.connect();

  var myQuery = " UPDATE pokemon SET modified_date = NOW()";
  var myValues = [ ];

  if (req.body.pokemon_name){
    myQuery += " , pokemon_name = ? ";
    myValues.push(req.body.pokemon_name);
  }

  if (req.body.altura){
    myQuery += " , altura = ? ";
    myValues.push(req.body.altura);
  }

  if (req.body.categoria){
    myQuery += " , categoria = ? ";
    myValues.push(req.body.categoria);
  }

  if (req.body.peso){
    myQuery += " , peso = ? ";
    myValues.push(req.body.peso);
  }
  
  if (req.body.habilidad){
    myQuery += " , habilidad = ? ";
    myValues.push(req.body.habilidad);
  }

  if (req.body.tipo){
    myQuery += " , tipo = ? ";
    myValues.push(req.body.tipo);
  }

  if (req.body.url){
    myQuery += " , url = ? ";
    myValues.push(req.body.url);
  }

  myQuery += " WHERE id = ? "
  myValues.push(req.params.id);

  connection.query(myQuery, myValues, function(error, results, fields){

    if (error) throw error;

    res.send(results);

    connection.end();
  });
});

app.delete('/pokemons/:id', function(req, res){

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'utec',
  password: '1234567890',
  database: 'pokedex'
});

connection.connect();

var myQuery = " DELETE FROM pokemon " +
              " WHERE id = ?; ";

var myValues = [ req.params.id ];

connection.query(myQuery, myValues, function(error, results, fields){

  if (error) throw error;

  res.send(results);

  connection.end();
});
});






app.listen(3000, function(){
    console.log("Server started in port 3000!!!")
})