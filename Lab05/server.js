const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("Usuario conectado");

  socket.on("chat message 1", function (msg) {
    console.log("Mensaje del chat 1: " + msg);
    // Si hay una imagen de perfil, la guardamos en el servidor
    // Verificar si se proporcionó una imagen codificada en Base64
    if (msg.imagenPerfil) {
      const imageBuffer = Buffer.from(
        msg.imagenPerfil.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );

      // Guardar la imagen en la carpeta de uploads
      const imageName = Date.now() + ".jpeg"; // Puedes usar la extensión que corresponda
      const imagePath = "public/uploads/" + imageName;

      require("fs").writeFile(imagePath, imageBuffer, function (err) {
        if (err) {
          console.error("Error al guardar la imagen:", err);
        } else {
          console.log("Imagen de perfil guardada con éxito:", imageName);
          // Actualizar el mensaje para incluir la ruta de la imagen
          msg.imagenPerfil = "/uploads/" + imageName;
          // Emitir el mensaje actualizado a todos los clientes
          io.emit("chat message 1", msg);
        }
      });
    } else {
      io.emit("chat message 1", msg);
    }
  });

  socket.on("chat message 2", function (msg) {
    console.log("Mensaje del chat 2: " + msg);
    // Si hay una imagen de perfil, la guardamos en el servidor
    // Verificar si se proporcionó una imagen codificada en Base64
    if (msg.imagenPerfil) {
      const imageBuffer = Buffer.from(
        msg.imagenPerfil.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );

      // Guardar la imagen en la carpeta de uploads
      const imageName = Date.now() + ".jpeg"; // Puedes usar la extensión que corresponda
      const imagePath = "public/uploads/" + imageName;

      require("fs").writeFile(imagePath, imageBuffer, function (err) {
        if (err) {
          console.error("Error al guardar la imagen:", err);
        } else {
          console.log("Imagen de perfil guardada con éxito:", imageName);
          // Actualizar el mensaje para incluir la ruta de la imagen
          msg.imagenPerfil = "/uploads/" + imageName;
          // Emitir el mensaje actualizado a todos los clientes
          io.emit("chat message 2", msg);
        }
      });
    } else {
      io.emit("chat message 2", msg);
    }
  });

  socket.on("disconnect", function () {
    console.log("Usuario desconectado ");
  });
});

http.listen(3000, function () {
  console.log("Servidor escuchando en http://localhost:3000 ");
});
