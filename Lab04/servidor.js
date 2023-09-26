const http = require("http");
const fs = require("fs");
const moduloHora = require("./implementacion/moduloHora");
const moduloDiasFaltantes = require("./implementacion/moduloDiasFaltantes");
const moduloEnrutador = require("./implementacion/modulo_enrutador");

http
  .createServer(function (req, res) {
    if (req.url === "/hora") {
      fs.readFile("./implementacion/hora.html", function (err, html) {
        if (err) {
          res.writeHead(404, { "Content-type": "text/html" });
          res.write("Página no encontrada");
          res.end();
        } else {
          const hora = moduloHora.obtenerHora();
          var html_string = html.toString();

          html_string = html_string.replace("{horaActual}", hora.horaActual);
          html_string = html_string.replace(
            "{horaFormato12}",
            hora.horaFormato12
          );
          html_string = html_string.replace(
            "{horaFormato24}",
            hora.horaFormato24
          );

          res.writeHead(200, { "Content-type": "text/html" });
          res.write(html_string);
          res.end();
        }
      });
    } else if (req.url.startsWith("/dias")) {
      // Supongamos que la URL tiene el formato /dias?fecha=2023-12-31
      const urlParams = new URLSearchParams(
        req.url.slice(req.url.indexOf("?"))
      );
      const fechaObjetivo = urlParams.get("fecha");
      const diasFaltantes =
        moduloDiasFaltantes.calcularDiasFaltantes(fechaObjetivo);

      fs.readFile("./implementacion/dias.html", function (err, html) {
        if (err) {
          res.writeHead(404, { "Content-type": "text/html" });
          res.write("Página no encontrada");
          res.end();
        } else {
          var html_string = html.toString();

          html_string = html_string.replace("{diasFaltantes}", diasFaltantes);

          res.writeHead(200, { "Content-type": "text/html" });
          res.write(html_string);
          res.end();
        }
      });
    } else {
      moduloEnrutador.enrutar(req, res);
    }
  })
  .listen(3000);
