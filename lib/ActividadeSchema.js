const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadeSchema = new Schema({



	nombre:String,
	clasificacion:String,
   examen:String,

});

module.exports = mongoose.model("Actividades", ActividadeSchema);
