// modulo_enrutador.js
const fs = require("fs");

function enrutar(req, res) {
  const url = req.url;

  switch (url) {
    case "/hora":
      mostrarPagina("hora.html", res);
      break;
    case "/dias":
      mostrarPagina("dias.html", res);
      break;
    default:
      mostrarPagina("404.html", res);
      break;
  }
}

function mostrarPagina(nombrePagina, res) {
  fs.readFile(nombrePagina, function (err, html) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.write("Página no encontrada");
      res.end();
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(html);
      res.end();
    }
  });
}

module.exports.enrutar = enrutar;
