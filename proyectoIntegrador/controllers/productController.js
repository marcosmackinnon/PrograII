const db = require("../database/models");

const productController = {
  product: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [
        { association: "usuario" },// quién publicó el producto
        { association: "comentarios", 
          
          include: [{ association: "usuario" }] // quién hizo el comentario 
        }
      ]
    })
    .then(function (product) {
      return res.render("product", { product: product });
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  productAdd: function (req, res) { //cambiarlo
    db.Usuario.findAll()
    .then(function (users) {
      return res.render("product-add", { user: users });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};

module.exports = productController;
