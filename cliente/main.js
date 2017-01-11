//conexion del cliente al socket
var socket = io.connect("http://192.168.1.69:6677", {
	"forceNew": true
});

socket.on("messages", function (data) {
	console.log(data);
	render(data);
});

function render(data) {
	var html = data.map(function (messages, index) {
		return (`<div class='message'><strong> ${messages.nickname}</strong> dice: <span>${messages.text}</span></div>`);
	}).join(" ");

	document.getElementById("messages").innerHTML = html;
}

function addMessage(e) {
	var message = {
		nickname: document.getElementById("nickname").value,
		text: document.getElementById("text").value
	};

	document.getElementById("nickname").style.display = "none";
	socket.emit("add-message", message);
	return false;
}
