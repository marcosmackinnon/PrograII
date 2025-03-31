const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// PUNTO 1 - Creamos rutas y las conectamos con controladores
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/perfil', mainController.profile);
router.get('/producto/agregar', mainController.productAdd);
router.get('/producto/:id', mainController.product);
router.get('/buscar', mainController.searchResults);


module.exports = router;
