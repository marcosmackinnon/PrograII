const db = require("../database/models");
let Op = db.sequelize.Op;

const mainController = {
  index: function(req, res) {
    db.Producto.findAll({
      include: [{ association: "usuario" }, {association: "comentarios"}]
    })
    .then(function(productos) {
      //res.send(productos)
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
    let search = req.query.search;
    db.Producto.findAll({
      
      where: {
        nombre:{ [Op.like]: `%${search}%` }
      },
      include: [
        { association: "usuario" },
        { association: "comentarios" }
      ]
      
    })
    .then(function(productos) {
      res.render("search-results", {
        title: "Mercedez Benz Store",  // corregir todos los title estos (definirlo en el partial del head)
        data: productos,
        search: search
        
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  profile: function(req, res) {
    db.Usuario.findByPk(req.params.id, {
      include: [
        { association: "productos" },
        { association: "comentarios" }
      ]
    })
    .then(function(user) {
      res.render("profile", {
        title: "Mercedez Benz Store",
        data: user
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }
};

module.exports = mainController;