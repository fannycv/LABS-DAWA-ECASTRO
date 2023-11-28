const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  genero: { type: String, required: true },
  fecha: { type: Date, required: true },
  imagen: { type: String, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
