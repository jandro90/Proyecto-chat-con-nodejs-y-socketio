//cargando libreria express.
var express = require("express");

//llamamos a express
var app = express();

//cargando libreria http  	//asignar metodo server a express
var server = require("http").Server(app);

//cargando libreria socket   //enlazado al servidor
var io = require("socket.io")(server);

//creacion de ruta de prueba
app.get("/hola-mundo", function (req, res) {
	res.send("Hola mundo desde una ruta");
});

//creando el servidor con express
server.listen(6677, function () {
	console.log("aplicación funcionando en http://localhost:6677")
});
