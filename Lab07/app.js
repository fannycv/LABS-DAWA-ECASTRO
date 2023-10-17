const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Configurar MongoDB
mongoose.connect("mongodb://localhost:27017/peliculasdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el modelo de película
const peliculaSchema = new mongoose.Schema({
  titulo: String,
  director: String,
  año: Number,
  imagen: String,
});
const Pelicula = mongoose.model("Pelicula", peliculaSchema);

// Configurar Express
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/movies", (req, res) => {
  Pelicula.find({})
    .then((peliculas) => {
      res.render("movies", { peliculas });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/movies", (req, res) => {
  const nuevaPelicula = new Pelicula(req.body);
  nuevaPelicula
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
