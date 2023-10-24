const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const bcrypt = require("bcrypt");
const { check, body, validationResult } = require("express-validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// En la ruta GET para mostrar la vista inicial
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users, errors: [], formData: {} });
});

router.post(
  "/",
  [
    check("name").notEmpty().withMessage("El nombre es obligatorio"),
    check("email").isEmail().withMessage("El correo electrónico no es válido"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres")
      .notEmpty()
      .withMessage("La contraseña es obligatoria"),
  ],
  async (req, res) => {
    // Validar los errores de validación
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const users = await User.find();
      return res.render("index", {
        users,
        errors: errors.array(),
        formData: req.body,
      });
    }

    try {
      // Encriptar la contraseña antes de almacenarla en la base de datos
      const hashedPassword = await hashPassword(req.body.password);

      // Crear un nuevo usuario con la contraseña encriptada
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      // Ahora guarda el nuevo usuario en la base de datos
      await newUser.save();

      // Realiza cualquier otra acción necesaria después de guardar el usuario en la base de datos
      res.redirect("/users");
    } catch (error) {
      // Manejar cualquier error que ocurra durante la encriptación o el almacenamiento
      res.status(500).send("Error al crear el usuario.");
    }
  }
);

router.post(
  "/update/:id",

  async (req, res) => {
    const { name, email, password } = req.body;
    const userId = req.params.id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const user = await User.findById(userId);
      return res.render("partials/edit", { user, errors: errors.array() });
    }
    try {
      const user = await User.findById(userId);
      user.name = name;
      user.email = email;

      if (password) {
        // Si se proporciona una nueva contraseña, encriptarla y actualizarla
        user.password = await hashPassword(password);
      }
      await user.save();
      res.redirect("/users");
    } catch (error) {
      res.status(500).send("Error al actualizar el usuario.");
    }
  }
);

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    throw new Error("Error al encriptar la contraseña");
  }
}

router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("partials/edit", { user });
});

router.get("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/users");
});

module.exports = router;
