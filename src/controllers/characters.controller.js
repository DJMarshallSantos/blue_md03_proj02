const charactersService = require('../services/characters.service');
const mongoose = require('mongoose');

const findCharactersController = async (req, res) => {
    const allCharacters = await charactersService.findCharactersService();
    res.send(allCharacters);
};

const findCharacterByIdController = async (req, res) => {
    const idParam = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      res.status(400).send({ message: 'Invalid ID!' });
      return;
    }
  
    const chosenCharacter = await charactersService.findCharacterByIdService(idParam);
  
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
  
    res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
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
  
    const newCharacter = await charactersService.createCharacterService(character);
  
    res.send(newCharacter);
};

const updateCharacterController = async (req, res) => {
    const idParam = req.params.id;
    const characterEdit = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      res.status(400).send({ message: 'Invalid ID!' });
      return;
    }
  
    const chosenCharacter = await charactersService.findCharacterByIdService(idParam);
  
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
  
    if (
      !characterEdit ||
      !characterEdit.alias ||
      !characterEdit.name ||
      !characterEdit.base ||
      !characterEdit.identity ||
      !characterEdit.img
    ) {
      return res.status(400).send({ message: 'All fields are required!' });
    }
  
    const updatedCharacter = await charactersService.updateCharacterService(idParam, characterEdit);
  
    res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
    const idParam = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      res.status(400).send({ message: 'Invalid ID!' });
      return;
    }
  
    const chosenCharacter = await charactersService.findCharacterByIdService(idParam);
  
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
  
    await charactersService.deleteCharacterService(idParam);
  
    res.send({ message: 'The character has been successfully deleted!' });
};

module.exports = {
    findCharactersController,
    findCharacterByIdController,
    createCharacterController,
    updateCharacterController,
    deleteCharacterController
};
