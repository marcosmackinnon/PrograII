const db = require("../database/models");

const userController = {
  perfil: function (req, res) {
    db.Usuario.findByPk(req.params.id, {
      include: [
        { association: "productos" },
        { association: "comentarios" }
      ]
    })
    .then(function (user) {
      return res.render("perfil", { user: user });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};

module.exports = userController;