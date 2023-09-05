var http = require("http");

var manejador = function (solicitud, respuesta) {
  var i = 0;
  var limite = 10; // Número máximo de iteraciones del bucle

  while (i < limite) {
    respuesta.write(i + "-->");
    i++;
  }

  respuesta.end(); // Cierra la conexión después de terminar el bucle
};
var servidor = http.createServer(manejador);

servidor.listen(8080);
