
const findCharactersController = async (req, res) => {
    const allCharacters = await charactersService.findCharactersService();
    res.send(allCharacters);
};

const findCharacterByIdController = async (req, res) => {
    const idParam = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      res
        .status(400)
        .send({ message: 'Invalid ID!' });
      return;
    }
  
    const chosenCharacter = await charactersService.findCharacterByIdService(idParam);
  
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
  
    res.send(chosenCharacter);
};
