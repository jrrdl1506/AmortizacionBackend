const mongoose = require('mongoose');

const AmortizacionParams = mongoose.Schema({
    
    periodo: {
        type:Number,
        required:true
    },

    cuota: {
        type:Number,
        required: true
    },

    interes: {
        type: Number,
        required: true
    },

    capital: {
        type: Number,
        required: true
    },

    saldo: {
        type: Number,
        required: true
    }

});

const AmortizacionSchema = mongoose.Schema({
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        required: true
    },
    params: [AmortizacionParams]
});

module.exports = mongoose.model('Amortizacion', AmortizacionSchema);