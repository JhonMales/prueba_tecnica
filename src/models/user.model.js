const mongose = require('mongoose');
const Schema = mongose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'], trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'], unique: true, trim: true, lowercase: true
    },
    createdAt: {
        type: Date, default: Date.now,
    },
});

module.exports = mongose.model('Usuario', usuarioSchema);