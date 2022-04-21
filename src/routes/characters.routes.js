const router = require('express').Router();

const charactersController = require('../controllers/characters.controller');

router.get('/all-characters', charactersController.findCharactersController);
router.get('/single-character/:id', charactersController.findCharacterByIdController);
router.post('/create', charactersController.createCharacterController);
router.put('/edit-character/:id', charactersController.updateCharacterController);
router.delete('/delete-character/:id', charactersController.deleteCharacterController);

module.exports = router;
