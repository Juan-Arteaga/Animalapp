const Foro = require("./ForoSchema");
exports.getForos = (req, res) => {
  Foro.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getForo = (req, res) => {
  let id = req.params.id;

  Foro.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newForo = (req, res) => {
  const newForo = new Foro(req.body);
  newForo.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newForo);
  });
};

exports.updateForo = (req, res) => {
  let nombre = req.body.nombre;
  Foro.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteForo = (req, res) => {
  Foro.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
