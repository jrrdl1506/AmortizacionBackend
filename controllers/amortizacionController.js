const Amortizacion = require('../models/Amortizacion');
const Usuario = require('../models/Usuario');

// ALTA AMORTIZACIONES
exports.createAmortizacion = async(req,res) =>{
    try{
        const usuarioId = req.body.usuarioId;
        const amortizacion = 
            new Amortizacion({
                usuario: usuarioId,
                params:[]
            });
        await amortizacion.save();
        return res.status(201).json(amortizacion);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Error al crear la amortizacion'});
    }

}

// ALTA PAsRAMETROS DE AMORTIZACION

exports.anadirPrestamo = async(req,res) => {
    try{
        const usuarioId = req.params.id;
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario){
            return res.status(404).json({message:'El usuario no existe'});
        }

        const prestamo= req.body;
        const amortizacion = await Amortizacion.findOne({usuario:usuarioId});
        
        amortizacion.params.push(prestamo);

        await amortizacion.save();

        return res.status(201).json(amortizacion);

    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:'Error al agregar el abono'});
    }

}


// OBTENER TODOS LOS PRESTAMOS DE UNA AMORTIZACION


exports.getPrestamos = async (req,res) => {
    try {
        const usuarioId = req.params.id;
        const amortizacion = await Amortizacion.findOne({usuario:usuarioId});

        if(!amortizacion){
            return res.status(404).json({message:'La amortizacion no existe'});
        }

        const prestamos = amortizacion.params;

        return res.status(200).json({amortizacion,prestamos});

    }
    catch(error){
        return res.status(500).json({message:'Error al obtener amortizacion y los prstamos '});

    }
}

exports.getAmortizacion = async(req,res)=>{
    try{
        const usuarioId = req.params.id;
        // console.log(usuarioId);
        const amortizacion = await Amortizacion.findOne({usuario:usuarioId});
        
        if(!amortizacion){
            return res.status(404).json({message:'La amortizacion no existe'});
        }
        return res.status(200).json(amortizacion);
    
    }
    catch(error){
        return res.status(500).json({message:'Error al obtener amortizacion'});

    }
}

