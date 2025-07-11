const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        senha: {type: String, required: true} 
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Usuario', UsuarioSchema)