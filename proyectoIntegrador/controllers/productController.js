
const usersData = require("../db/usersData") // concectamos el users data 

const productController = {
    product: function(req, res) {
      const product = usersData.productos[0];
        res.render('product', {product});
      },
    
      productAdd: function(req, res) {
        const user = usersData.users[0]; 
        res.render('product-add', { user });  // le mandas a el product-add, el user 
      },

}



module.exports = productController;