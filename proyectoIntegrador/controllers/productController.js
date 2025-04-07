
const productController = {
    product: function(req, res) {
        res.render('product');
      },
    
      productAdd: function(req, res) {
        const user = usersData.users[0]; 
        res.render('product-add', { user });  // le mandas a el product-add, el user 
      },

}



module.exports = productController;