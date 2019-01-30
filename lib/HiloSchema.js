const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HiloSchema = new Schema({

  userId:String,
  id:String,
  nombre:String,
  informacion:String,
  fecha:String,
});

module.exports = mongoose.model("Hilo", HiloSchema);
  
