const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({

  
	nombre:String,
	contenido:String,
	calificacion:String,
	fecha:String,
});

module.exports = mongoose.model("Comentarios", ComentarioSchema);
