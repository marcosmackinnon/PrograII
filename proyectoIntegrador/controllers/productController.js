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
  },
  productCreate: function (req, res) {


    //   // Validar que esté logueado ?? es necesario hacer esto?  PREGUNTARRRRRRRRRRRRRRRRRR


    // 1️⃣ Capturar los datos que vienen del formulario
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let imagen = req.body.imagen;
  
    // 2️⃣ Crear el producto en la base de datos
    db.Producto.create({
      nombre: nombre,
      descripcion: descripcion,
      imagen_nombre: imagen,
      usuario_id: req.session.usuarioLogueado.id // Asegurate de que está guardado en sesión
    })
    .then(function () {
      // 3️⃣ Redireccionar a la página principal o a donde quieras
      return res.redirect('/');
    })
    .catch(function (error) {
      console.log(error);
      res.send("Error al crear el producto.");
    });
  }
};





module.exports = productController;
