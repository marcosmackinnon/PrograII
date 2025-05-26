const db = require("../database/models");

const mainController = {
  index: function(req, res) {
    db.Producto.findAll({
      include: [{ association: "usuario" }]
    })
    .then(function(productos) {
      res.render("index", {
        title: "Mercedez Benz Store",
        data: productos
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  searchResults: function(req, res) {
    db.Producto.findAll({
      include: [{ association: "usuario" }]
    })
  }
}

 