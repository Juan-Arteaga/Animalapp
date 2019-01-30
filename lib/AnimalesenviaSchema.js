const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalesenviaSchema = new Schema({



	nombre:String,
	clasificacion:String,
	descripcion:String,
	imagen:String,
  prevencion:String,
  videsos:String,


});

module.exports = mongoose.model("Animalesenvia", AnimalesenviaSchema);
