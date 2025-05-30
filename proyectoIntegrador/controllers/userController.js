const db = require("../database/models");
let bcrypt = require('bcryptjs');

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
    return res.render('register')
  },

  registerCreate: function (req, res) {
    // 1. Capturar los datos del formulario
    let email = req.body.email;
    let nombre = req.body.usuario;
    let contrasena = req.body.contrasena;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let dni = req.body.dni;
    let foto_perfil = req.body.foto_perfil

    // VALIDACIÓN 1: campo email vacío
    if (email == "") {
      return res.send("Debes completar el campo de email.");
  }

  // VALIDACIÓN 2: campo contraseña vacío
  if (contrasena == "") {
      return res.send("Debes completar la contraseña.");
  }

  // VALIDACIÓN 3: contraseña demasiado corta
  if (contrasena.length < 3) {
      return res.send("La contraseña debe tener al menos 3 caracteres.");
  }

  // BUSCAR EMAIL EN LA BASE
  db.Usuario.findOne({
      where: { email: email }
  })
  .then(function(usuarioExistente) {
      if (usuarioExistente) { //duda
          return res.send("Este email ya está registrado.");
      }

      // ENCRIPTAR CONTRASEÑA
      
      let encriptado = bcrypt.hashSync(contrasena, 10);

      // CREAR EL USUARIO
      db.Usuario.create({
          email: email,
          nombre: nombre,
          contrasena: encriptado,
          fecha_nacimiento: fecha_nacimiento,
          dni: dni,
          foto_perfil: foto_perfil
          
      })
      .then(function() {
          return res.redirect('/users/login');
      })
      .catch(function(error) {
          console.log(error);
          res.send("Error al crear el usuario.");
      });
  })
  .catch(function(error) {
      console.log(error);
      res.send("Error al verificar el email.");
  });
  }
};

module.exports = userController;