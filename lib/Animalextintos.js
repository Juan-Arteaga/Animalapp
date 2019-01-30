const Animalextinto = require("./AnimalextintoSchema");
exports.getAnimalextintos = (req, res) => {
  Animalextinto.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getAnimalextinto = (req, res) => {
  let id = req.params.id;

  Animalextinto.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newAnimalextintos = (req, res) => {
  const newAnimalextintos = new Animalextinto(req.body);
  newAnimalextintos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newAnimalextintos);
  });
};

exports.updateAnimalextinto = (req, res) => {
  let nombre = req.body.nombre;
  Animalextinto.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteAnimalextinto = (req, res) => {
  Animalextinto.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
