
const productController = {
    product: function(req, res) {
        res.render('product');
      },
    
      productAdd: function(req, res) {
        const user = usersData[0];  //  esta bien??
        res.render('product-add', { user });  // le mandas el profile y el user 
      },

}



module.exports = productController;