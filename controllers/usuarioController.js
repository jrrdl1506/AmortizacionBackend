const Usuario = require("../models/Usuario");


// ALTA USUARIOS
exports.crearUsuario = async (req,res) => {
    try{
        let usuario;

        usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);

    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// OBTENER USUARIOS

exports.obtenerUsuarios = async (req,res) => {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

//OBTENER UN USUARIO

exports.obtenerUsuario = async (req,res) => {
    try{
        const usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg:'No existe el usuario'});
        }
        res.json(usuario);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//AUTENTICAR USUARIO

exports.autenticarUsuario = async (req,res) => {
    const {usuario,password} = req.body;
    
    try {
        const user = await Usuario.findOne({usuario,password});
        if(!usuario){
            return res.status(401).json({mensaje:'Credenciales incorrectas'});
        }
        return res.status(200).json({user});
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}




