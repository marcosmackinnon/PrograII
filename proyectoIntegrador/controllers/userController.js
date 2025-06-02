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
      
      console.log(user)
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
   
    let email = req.body.email;
    let nombre = req.body.usuario;
    let contrasena = req.body.contrasena;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let dni = req.body.dni;
    let foto_perfil = req.body.foto_perfil

   
    if (email == "") {
      return res.send("Debes completar el campo de email.");
  }

 
  if (contrasena == "") {
      return res.send("Debes completar la contraseña.");
  }

  if (contrasena.length < 3) {
      return res.send("La contraseña debe tener al menos 3 caracteres.");
  }

  db.Usuario.findOne({
      where: { email: email }
  })
  .then(function(usuarioExistente) {
      if (usuarioExistente) { //duda
          return res.send("Este email ya está registrado.");
      }

      
      let encriptado = bcrypt.hashSync(contrasena, 10);

  
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
  },
  loginProcesar: function(req, res) {
    let userInfo = {
        email: req.body.email,
        password: req.body.password,
        remember: req.body.remember
    };

    // Si el usuario ya está logueado, lo redireccionamos a su perfil
    if (req.session.user) {
        return res.redirect('/users/profile/' + req.session.usuarioLogueado.id);
    }

    // busco el usuario en la base de datos por su email
    db.Usuario.findOne({
        where: { email: userInfo.email }
    })
    .then(function(usuario) {
        // hago la validacion 1: si el email no existe
        if (!usuario) {
            return res.render('login', { error: "Email no registrado" });
        }

        // la validacion 2: si la contraseña no coincide
        const contraCoincide = bcrypt.compareSync(userInfo.password, usuario.contrasena);
        if (!contraCoincide) {
            return res.render('login', { error: "Contraseña incorrecta" });
        }

        // guardo el usuario en session
        req.session.usuarioLogueado = usuario;

        // Si el usuario tildó "recordarme", guardamos cookie
        if (userInfo.remember ) {
            res.cookie('usuarioLogueado', usuario, { maxAge: 1000 * 60 * 5 }); // 5 minutos - SABERSE BIEN ESTO PARA EL ORAL 
        }

        
        return res.redirect('/users/profile/' + usuario.id);
    })
    .catch(function(error) {
        console.error(error);
        res.send("Ocurrió un error al intentar iniciar sesión.");
    });
},
loginDestroy: function (req, res) {
  res.clearCookie('usuarioLogueado');
  req.session.destroy();
  res.redirect('/');
},


};



module.exports = userController;