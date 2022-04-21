const Character = require('../models/Character');

const findCharactersService = async (req, res) => {
    const characters = await Character.find();
    return characters;
}

const findCharacterByIdService = async (idParam) => {
    const character = await Character.findById(idParam);
    return character;
};

const createCharacterService = async (newCharacter) => {
    const createCharacter = await Character.create(newCharacter)
    return createCharacter;
};

const updateCharacterService = async (idParam, editCharacter) => {
    const characterUpdated = await Character.findByIdAndUpdate(idParam, editCharacter);
    return editCharacter;
};

const deleteCharacterService = async (idParam) => {
    return await Character.findByIdAndDelete(idParam);
};

module.exports = {
    findCharactersService,
    findCharacterByIdService,
    createCharacterService,
    updateCharacterService,
    deleteCharacterService
};
