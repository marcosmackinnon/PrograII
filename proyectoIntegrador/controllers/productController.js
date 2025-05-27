const db = require("../database/models");

const productController = {
  product: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [
        { association: "usuario" },
        { association: "comentarios" }
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
