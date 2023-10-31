const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const amortizacionController = require('../controllers/amortizacionController');
//Rutas para los usuarios
router.post('/addUser',usuarioController.crearUsuario);
router.post('/authUser',usuarioController.autenticarUsuario);
router.get('/getUsers',usuarioController.obtenerUsuarios);
router.get('/getUser/:id',usuarioController.obtenerUsuario);


//Rutas para las amortizaciones

router.post('/generaAmortizacion',amortizacionController.createAmortizacion);
router.get('/obtenerAmortizacion/:id',amortizacionController.getAmortizacion);
router.post('/anadirPrestamo/:id',amortizacionController.anadirPrestamo);
router.get('/obtenerPrestamos/:id',amortizacionController.getPrestamos);
module.exports = router;