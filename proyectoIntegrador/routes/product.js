router.get('/producto/agregar', mainController.productAdd);
router.get('/producto/:id', mainController.product);

// exporto la ruta 

module.exports = router;
