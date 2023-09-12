const http = require("http");
const fs = require("fs");
const path = require("path");

//Para el formulario
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // Evitar solicitud de favicon.ico
  if (req.url === "/favicon.ico") {
    res.writeHead(204); // Respuesta exitosa sin contenido
    res.end();
    return;
  }
  if (req.method === "POST" && req.url === "/procesar-formulario") {
    // Manejar la solicitud POST del formulario
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = querystring.parse(body);
      const nombre = formData.name || "";
      const correo = formData.correo || "";
      const telefono = formData.telefono || "";
      const mensaje = formData.mensaje || "";

      // Redirigir o responder al usuario
      res.writeHead(302, { Location: "/confirmacion.html" });
      res.end();
    });
  } else {
    // Obtén la ruta absoluta del archivo solicitado
    const filePath = path.join(__dirname, "public", req.url);

    console.log("Ruta del archivo solicitado:", filePath); // Mensaje de depuración

    // Verifica si filePath es un archivo o un directorio
    if (fs.statSync(filePath).isDirectory()) {
      console.error("Se intentó leer un directorio:", filePath);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("Error del servidor");
      return;
    }

    // Lee el archivo solicitado y responde con su contenido
    fs.readFile(filePath, (err, content) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
        if (err.code === "ENOENT") {
          console.error("Archivo no encontrado:", filePath);
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("Archivo no encontrado");
        } else {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("Error del servidor");
        }
      } else {
        const ext = path.extname(filePath);
        let contentType = "text/html";
        switch (ext) {
          case ".js":
            contentType = "text/javascript";
            break;
          case ".css":
            contentType = "text/css";
            break;
          case ".json":
            contentType = "application/json";
            break;
          case ".png":
            contentType = "image/png";
            break;
          case ".jpg":
            contentType = "image/jpeg";
            break;
        }

        console.log("Sirviendo archivo:", filePath);

        // Archivo encontrado, envía el contenido como respuesta
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
