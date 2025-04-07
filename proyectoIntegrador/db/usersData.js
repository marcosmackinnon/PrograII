



  // ESTO PREGUNTARLE SI SE PUEDE HACER (OSEA SI SERIA EL MODULO DE DATOS QUE DECIMOS EN EL PUNTO 8)

  const users = [
    {
      email: "ejemplo@correo.com",
      usuario: "Marcos",
      contrasena: "1234",
      nacimiento: "2000-05-02"
    },
    {
      email: "ejemplo2@correo.com",
      usuario: "Silvestre",
      contrasena: "4321",
      nacimiento: "2005-08-11"
    }
  ];
  
  const productos = [
    {
      id: 1,
      nombre: "Cafetera",
      descripcion: "Cafetera moulinex",
      imagen: "images/products/img-cafetera-moulinex.jpg", //esta bien?
      comentarios: [
        {
          usuario: "Marcos",
          texto: "Muy cómodas para correr.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 2,
      nombre: "Smart TV Samsung 55''", //cambiar los productos
      descripcion: "Smart TV 4K con acceso a plataformas de streaming.",
      imagen: "",
      comentarios: [
        {
          usuario: "Lucía",
          texto: "Excelente calidad de imagen.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 3,
      nombre: "Notebook Lenovo IdeaPad 3",
      descripcion: "Notebook con procesador AMD Ryzen 5 y 8GB de RAM.",
      imagen: "",
      comentarios: [
        {
          usuario: "Juan",
          texto: "Muy buena para estudiar y trabajar.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 4,
      nombre: "Celular iPhone 13",
      descripcion: "Apple iPhone 13 con 128GB de almacenamiento.",
      imagen: "",
      comentarios: [
        {
          usuario: "Valentina",
          texto: "Súper rápido y la cámara es genial.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 5,
      nombre: "Aspiradora Philips",
      descripcion: "Aspiradora sin bolsa con tecnología ciclónica.",
      imagen: "",
      comentarios: [
        {
          usuario: "Carlos",
          texto: "Muy práctica y potente.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 6,
      nombre: "Parlante JBL GO 3",
      descripcion: "Parlante portátil resistente al agua.",
      imagen: "",
      comentarios: [
        {
          usuario: "Laura",
          texto: "Chiquito pero con buen sonido.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 7,
      nombre: "Silla gamer",
      descripcion: "Silla ergonómica reclinable con apoyabrazos.",
      imagen: "",
      comentarios: [
        {
          usuario: "Tomás",
          texto: "Muy cómoda para jugar varias horas.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 8,
      nombre: "Mochila Jansport",
      descripcion: "Mochila clásica resistente para uso diario.",
      imagen: "",
      comentarios: [
        {
          usuario: "Sofía",
          texto: "Entraron todos mis libros.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 9,
      nombre: "Auriculares Sony WH-CH520",
      descripcion: "Auriculares inalámbricos con Bluetooth y micrófono.",
      imagen: "",
      comentarios: [
        {
          usuario: "Mauro",
          texto: "Buena batería y calidad de sonido.",
          imagenPerfil: ""
        }
      ]
    },
    {
      id: 10,
      nombre: "Mouse Logitech M280",
      descripcion: "Mouse inalámbrico ergonómico con receptor USB.",
      imagen: "",
      comentarios: [
        {
          usuario: "Agustina",
          texto: "Muy cómodo y preciso.",
          imagenPerfil: ""
        }
      ]
    }
  ];
   
  module.exports = {
    users,
    productos
  };
  