const Animalesenvia = require("./AnimalesenviaSchema");
exports.getAnimalesenvias = (req, res) => {
  Animalesenvia.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getAnimalesenvia = (req, res) => {
  let id = req.params.id;

  Animalesenvia.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newAnimalesenvia = (req, res) => {
  const newAnimalesenvia = new Animalesenvia(req.body);
  newAnimalesenvia.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newAnimalesenvia);
  });
};

exports.updateAnimalesenvia = (req, res) => {
  let nombre = req.body.nombre;
  Animalesenvia.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteAnimalesenvia = (req, res) => {
  Animalesenvia.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
