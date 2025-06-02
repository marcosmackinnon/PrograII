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

    //let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let imagen = req.body.imagen;
  
    console.log(req.body)

    db.Producto.create({
      nombre: req.body.nombre,
      descripcion: descripcion,
      imagen_nombre: imagen,
      usuario_id: req.session.usuarioLogueado.id // me aseguro de que está guardado en sesión
    })
    .then(function () {
      return res.redirect('/');
    })
    .catch(function (error) {
      console.log(error);
      res.send("Error al crear el producto.");
    });
  },


  agregarComentario: function (req, res) {
    // Validar sesión
    if (req.session.usuarioLogueado == undefined) {
      return res.redirect('/users/login');
    }
  
    let textoComentario = req.body.comentario;
    let productoId = req.params.id;
  
    db.Comentario.create({
      texto: textoComentario,
      usuario_id: req.session.usuarioLogueado.id,
      producto_id: productoId
    })
    .then(function () {
      return res.redirect('/product/' + productoId);
    })
    .catch(function (error) {
      console.log(error);
      res.send("Error al agregar el comentario.");
    });
  }
};





module.exports = productController;
