const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const crypto = require("crypto");

// Genera una cadena secreta aleatoria
const secret = crypto.randomBytes(64).toString("hex");

// Configura el middleware de sesión
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);
// Configuración de EJS como motor de plantillas
app.set("view engine", "ejs");

// Middleware para procesar datos del cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Directorio de archivos estáticos
app.use(express.static(__dirname + "/public"));

// Ruta de inicio de sesión
app.get("/", (req, res) => {
  res.render("login");
});

const users = [
  { id: 1, username: "usuario1", password: "contrasena1" },
  { id: 2, username: "estefanycv", password: "fany123" },
];

app.post("/matriculas", (req, res) => {
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;

  // Busca el usuario en el arreglo de usuarios
  const user = users.find((user) => user.username === usuario);

  if (!user) {
    // Usuario no encontrado
    return res.render("login", { error: "Usuario no encontrado" });
  }

  if (user.password !== contrasena) {
    // Contraseña incorrecta
    return res.render("login", { error: "Contraseña incorrecta" });
  }
  // Si la autenticación es exitosa, establece el usuario logueado en la sesión
  req.session.usuarioLogueado = user;

  // Redirige a la vista de Matrículas
  res.render("matriculas", { usuarioLogueado: user });
});

// Ruta de confirmacion de matriculas
app.post("/confirmacion", (req, res) => {
  const curso = req.body.curso;
  const modulos = Array.isArray(req.body.modulo)
    ? req.body.modulo
    : [req.body.modulo]; // Convertir a un arreglo si no lo es
  const medioPago = req.body.medioPago;

  let total = 0;
  if (curso === "Java") {
    total = modulos.length * 1200;
  } else if (curso === "PHP") {
    total = modulos.length * 800;
  } else if (curso === ".NET") {
    total = modulos.length * 1500;
  }

  if (medioPago === "Pago en efectivo") {
    total = total - total * 0.1;
  }

  // Lógica para procesar los datos y mostrar la vista de confirmación
  res.render("confirmacion", {
    curso,
    modulo: modulos,
    medioPago,
    total,
    descuentoAplicado: medioPago === "Pago en efectivo", // true si se aplicó el descuento
  });
});

// Puerto en el que el servidor escucha las solicitudes
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
