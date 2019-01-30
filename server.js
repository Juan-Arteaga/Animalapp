//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
.connect(
//mongodb+srv://admin:<PASSWORD>@cluster0-zzsuc.mongodb.net/test?retryWrites=true
"mongodb://animalapp:juan321560..@cluster0-shard-00-00-xshgl.mongodb.net:27017,cluster0-shard-00-01-xshgl.mongodb.net:27017,cluster0-shard-00-02-xshgl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
{useNewUrlParser:true}
)
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var personas = require("./lib/Personas");


app.get("/personas", (req, res) => {
  personas.getPersonas(req, res);
});


app.get("/personas/:id", (req, res) => {
  personas.getPersonas(req, res);
});

app.post("/personas", (req, res) => {
  personas.newPersonas(req, res);
});

app.put("/personas/:id", (req, res) => {
  personas.updatePersonas(req, res);
});

app.delete("/personas/:id", (req, res) => {
  personas.deletePersonas(req, res);
});

var hilo = require("./lib/Hilo");

app.get("/hilo", (req, res) => {
  hilo.getHilo(req, res);
});

app.get("/hilo/:id", (req, res) => {
  hilo.getHilo(req, res);
});

app.post("/hilo", (req, res) => {
  hilo.newHilo(req, res);
});

app.put("/hilo/:id", (req, res) => {
  hilo.updateHilo(req, res);
});

app.delete("/hilo/:id", (req, res) => {
  hilo.deleteHilo(req, res);
});

var foro = require("./lib/Foro");

app.get("/foro", (req, res) => {
  foro.getForo(req, res);
});

app.get("/foro/:id", (req, res) => {
  foro.getForo(req, res);
});

app.post("/foro", (req, res) => {
  foro.newForo(req, res);
});

app.put("/foro/:id", (req, res) => {
  foro.updateForo(req, res);
});

app.delete("/foro/:id", (req, res) => {
  foro.deleteForo(req, res);
});


var comentarios = require("./lib/Comentarios");

app.get("/comentarios", (req, res) => {
  comentarios.getComentarios(req, res);
});

app.get("/comentarios/:id", (req, res) => {
  comentarios.getComentarios(req, res);
});

app.post("/comentarios", (req, res) => {
  comentarios.newComentarios(req, res);
});

app.put("/comentarios/:id", (req, res) => {
  comentarios.updateComentarios(req, res);
});

app.delete("/comentarios/:id", (req, res) => {
  comentarios.deleteComentarios(req, res);
});


var animalextintos = require("./lib/Animalextintos");

app.get("/animalextintos", (req, res) => {
  animalextintos.getAnimalextintos(req, res);

});


app.get("/animalextintos/:id", (req, res) => {
  animalextintos.getAnimalextintos(req, res);
});


app.post("/animalextintos", (req, res) => {
  animalextintos.newAnimalextintos(req, res);
});


app.put("/animalextintos/:id", (req, res) => {
  animalextintos.updateAnimalextintos(req, res);
});


app.delete("/animalextintos/:id", (req, res) => {
animalextintos.deleteAnimalextintos(req, res);
});


var actividades = require("./lib/Actividades");
app.get("/actividades", (req, res) => {

  actividades.getActividades(req, res);
});
app.get("/actividades/:id", (req, res) => {

  actividades.getActividades(req, res);
});
app.post("/actividades", (req, res) => {

  actividades.newActividades(req, res);
});
app.put("/actividades/:id", (req, res) => {

  actividades.updateActividades(req, res);
});
app.delete("/actividades/:id", (req, res) => {

  actividades.deleteActividades(req, res);
});

var animalesenvia = require("./lib/Animalesenvia");
app.get("/animalesenvia", (req, res) => {

  animalesenvia.getAnimalesenvia(req, res);
});
app.get("/animalesenvia/:id", (req, res) => {

  animalesenvia.getAnimalesenvia(req, res);
});
app.post("/animalesenvia", (req, res) => {

  animalesenvia.newAnimalesenvia(req, res);
});
app.put("/animalesenvia/:id", (req, res) => {

  animalesenvia.updateAnimalesenvia(req, res);
});
app.delete("/animalesenvia/:id", (req, res) => {

  animalesenvia.deleteAnimalesenvia(req, res);
});



// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
