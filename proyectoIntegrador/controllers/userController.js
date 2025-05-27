const db = require("../database/models");

const userController = {
  profile: function (req, res) {
    db.Usuario.findByPk(req.params.id, {
      include: [
        { association: "productos", include: [{association: "comentarios"}] },
        { association: "comentarios" }
      ]
    })
    .then(function (user) {
      //res.send(user)
      return res.render("profile", { user: user });
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  login: function(req,res){
    return res.render("login");
  },
  register: function(req,res){
    return res.render("register");
  }
  
};

module.exports = userController;