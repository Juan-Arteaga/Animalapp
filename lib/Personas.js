const Persona = require("./PersonaSchema");
exports.getPersonas = (req, res) => {
  Persona.find((err, persona) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(persona);
  });
};

exports.getPersonas = (req, res) => {
  let id = req.params.id;

  Persona.find({ _id: id }, (err, persona) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(persona);
  });
};

exports.newPersonas = (req, res) => {
  const newPersonas = new Persona(req.body);
  newPersonas.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newPersonas);
  });
};

exports.updatePersona = (req, res) => {
  let nombre = req.body.nombre;
  Persona.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deletePersona = (req, res) => {
  Persona.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
