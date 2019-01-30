const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForoSchema = new Schema({

  userId:String,
  id:String,
  nombre:String,
  fecha:String,
});

module.exports = mongoose.model("Foro", ForoSchema);
