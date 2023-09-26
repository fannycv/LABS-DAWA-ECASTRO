const http = require("http");
const fs = require("fs");
const path = require("path");

const servidor = http.createServer((req, res) => {
  // Obtener la ruta del recurso solicitado
  const url = req.url === "/" ? "/tarea/index.html" : req.url;
  const recurso = path.join(__dirname, url);

  // Verificar si el recurso existe
  fs.access(recurso, fs.constants.F_OK, (err) => {
    if (err) {
      // El recurso no existe, responder con un código de error 404
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("404 Not Found");
    } else {
      // El recurso existe, leer y servir el archivo
      fs.readFile(recurso, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "text/html" });
          res.end("500 Internal Server Error");
        } else {
          // Determinar el tipo de contenido según la extensión del archivo
          const extension = path.extname(recurso);
          let contentType = "text/html";

          if (extension === ".js") {
            contentType = "text/javascript";
          }

          res.writeHead(200, { "Content-type": contentType });
          res.end(data);
        }
      });
    }
  });
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
