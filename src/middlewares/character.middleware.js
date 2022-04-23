const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Invalid Id!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (
    !character ||
    !character.alias ||
    !character.name ||
    !character.base ||
    !character.identity ||
    !character.img
  ) {
    return res.status(400).send({ message: 'All fields are required!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody
};
