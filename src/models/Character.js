const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    "alias": {type: String, required: true},  
    "name": {type: String, required: true},  
    "base": {type: String, required: true},  
    "identity": {type: String, required: true},  
    "img": {type: String, required: true},
});

const Character = mongoose.model('characters', CharacterSchema);

module.exports = Character;
