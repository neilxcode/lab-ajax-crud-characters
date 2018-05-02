const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


// mongoose.connect('mongodb://localhost/lab-ajax-crud-characters', {useMongoClient: true})

const characterSchema = Schema({
        id: Number,
        name: String,
        occupation: String,
        weapon: String,
        cartoon: Boolean
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
