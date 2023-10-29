const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    usuario:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Usuario',UsuarioSchema);