const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({


  nombre: String,
  apellido: String,
  edad: String,
  ocupacion: String,
  correo:String
});

module.exports = mongoose.model("Personas", PersonaSchema);
