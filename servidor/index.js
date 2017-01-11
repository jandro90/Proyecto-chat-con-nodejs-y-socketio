//cargando libreria express.
var express = require("express");

//llamamos a express
var app = express();

//cargando libreria http  	//asignar metodo server a express
var server = require("http").Server(app);

//cargando libreria socket   //enlazado al servidor
var io = require("socket.io")(server);

//enlazar vista estatica del chat
app.use(express.static("cliente"));


//creacion de ruta de prueba
app.get("/hola-mundo", function (req, res) {
	res.send("Hola mundo desde una ruta");
});

var messages = [{
	id: 1,
	text: "Bienvenido a este chat creado con NodeJS by: Alejandro Gomez",
	nickname: "Bot De Sala"
}];

//abrimos conexion al socket
io.on("connection", function (socket) {
	console.log("El cliente con IP: " + socket.handshake.address + " se ha conectado");
	socket.emit("messages", messages);
	socket.on("add-message", function (data) {
		messages.push(data);
		io.sockets.emit("messages", messages);
	});
});




//creando el servidor con express
server.listen(6677, function () {
	console.log("aplicación funcionando en http://localhost:6677")
});
