const express = require('express'); // esto va a importar express
const router = express.Router(); // crea una instancia del router para despues poder definirlo con el .get 

const productController = require('../controllers/productController'); //trae el archivo del controlador lo guarda en la variable para dsp usarlo en el get 


router.get('/agregar', productController.productAdd);
router.get('/:id', productController.product);

// exporto la ruta 

module.exports = router;
