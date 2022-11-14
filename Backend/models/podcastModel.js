const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    thumbnail : String,
    file : String,
    artist : String,
    genre : Number,
});

module.exports = model('users', myschema);
