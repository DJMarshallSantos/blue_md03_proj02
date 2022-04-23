const charactersService = require('../services/characters.service');
const mongoose = require('mongoose');

const findCharactersController = async (req, res) => {
    const allCharacters = await charactersService.findCharactersService();
    res.send(allCharacters);
};

const findCharacterByIdController = async (req, res) => {
    const idParam = req.params.id;
    const chosenCharacter = await charactersService.findCharacterByIdService(idParam);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
    const character = req.body;
    const newCharacter = await charactersService.createCharacterService(character);
    res.send(newCharacter);
};

const updateCharacterController = async (req, res) => {
    const idParam = req.params.id;
    const characterEdit = req.body;
    const chosenCharacter = await charactersService.findCharacterByIdService(idParam);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    const updatedCharacter = await charactersService.updateCharacterService(idParam, characterEdit);
    res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
    const idParam = req.params.id;
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
