
const usersData = require("../db/usersData") // concectamos el users data 

const productController = {
    product: function(req, res) {
      let id = req.params.id; // agarramos el id de la URL
      let product;
     
      for (let i = 0; i < usersData.productos.length; i++) {
        if (usersData.productos[i].id == id) {
          product = usersData.productos[i];
        }
      } 
      res.render('product', { product: product });
    },
    
      productAdd: function(req, res) {
        const user = usersData.users[0]; 
        res.render('product-add', { user });  // le mandas a el product-add, el user 
      },

};



module.exports = productController;