const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// PUNTO 1 - Creamos rutas y las conectamos con controladores
router.get('/', mainController.index);
router.get('/buscar', mainController.searchResults);





module.exports = router;
