const router = require('express').Router();

const charactersController = require('../controllers/characters.controller');
const { validId, validObjectBody } = require('../middlewares/character.middleware');

router.get('/all-characters', charactersController.findCharactersController);
router.get('/single-character/:id',validId, charactersController.findCharacterByIdController);
router.post('/create-character', validObjectBody, charactersController.createCharacterController);
router.put('/edit-character/:id',validId, validObjectBody, charactersController.updateCharacterController);
router.delete('/delete-character/:id',validId, charactersController.deleteCharacterController);

module.exports = router;
