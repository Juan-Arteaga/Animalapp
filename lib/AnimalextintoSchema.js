const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalextintoSchema = new Schema({



	nombre:String,
	clasificacion:String,
	descripcion:String,
	imagen:String,
  causa:String,
  video:String,


});

module.exports = mongoose.model("Animalextintos", AnimalextintoSchema);
