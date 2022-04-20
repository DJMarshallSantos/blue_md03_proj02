const Character = require('../models/Character');

const findCharactersService = async (req, res) => {
    const characters = await Character.find();
    return characters;
}

const findCharacterByIdService = async (id) => {
    const character = await Character.findById(id);
    return character;
  };
