const Hilo = require("./HiloSchema");
exports.getHilos = (req, res) => {
  Hilo.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getHilo = (req, res) => {
  let id = req.params.id;

  Hilo.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newHilo = (req, res) => {
  const newHilo = new Hilo(req.body);
  newHilo.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newHilo);
  });
};

exports.updateHilo = (req, res) => {
  let nombre = req.body.nombre;
  Hilo.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteHilo = (req, res) => {
  Hilo.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
