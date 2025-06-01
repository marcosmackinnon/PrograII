const express = require('express'); // esto va a importar express
const router = express.Router(); // crea una instancia del router para despues poder definirlo con el .get 

const productController = require('../controllers/productController'); //trae el archivo del controlador lo guarda en la variable para dsp usarlo en el get 


router.get('/agregar', productController.productAdd);
router.post('/agregar', productController.productCreate);

router.post('/:id/comentario', productController.agregarComentario);


router.get('/:id', productController.product);  // ESTAR ATENTO A ESTO POR SI NOS PREGUNTA SI SE PUEDE ROMPER 



module.exports = router;
