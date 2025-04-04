router.get('/producto/agregar', productController.productAdd);
router.get('/producto/:id', productController.product);

// exporto la ruta 

module.exports = router;
