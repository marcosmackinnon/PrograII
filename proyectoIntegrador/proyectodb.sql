CREATE SCHEMA proyecto_db;

USE proyecto_db;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(200) NOT NULL UNIQUE,
    contrasena VARCHAR(300) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni INT NOT NULL UNIQUE,
    foto_perfil VARCHAR(300),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL,                      
    imagen_nombre VARCHAR(255),                            
    nombre VARCHAR(100) NOT NULL,                           
    descripcion TEXT NOT NULL,                             
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  producto_id INT UNSIGNED NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  texto TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,


  FOREIGN KEY (producto_id) REFERENCES productos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


INSERT INTO usuarios (email, contrasena, fecha_nacimiento, dni, foto_perfil)
VALUES 
('marcosmack@gmail.com', '1234', '2005-05-10', 44500111, 'images/products/default-image.png'),
('lucia.gomez@gmail.com', 'lucia123', '2004-08-23', 44222111, 'images/products/default-image.png'),
('mateo.rojas@gmail.com', 'mateo456', '2003-11-15', 43119999, 'images/products/default-image.png'),
('ema.lopez@gmail.com', 'ema789', '2006-01-05', 45500888, 'images/products/default-image.png'),
('sofia.perez@gmail.com', 'sofia321', '2002-03-12', 42987654, 'images/products/default-image.png');


INSERT INTO productos (usuario_id, imagen, nombre, descripcion)
VALUES
(1, 'images/autos/mercedesA200.avif', 'Mercedes-Benz A200', 'Auto compacto y moderno.'),
(2, 'images/autos/mercedesC200.jpeg', 'Mercedes-Benz C200', 'Cómodo y elegante.'),
(3, 'images/autos/mercedesGLC300.avif', 'Mercedes-Benz GLC 300', 'SUV con buen espacio.'),
(4, 'images/autos/mercedesEQA.jpeg', 'Mercedes-Benz EQA', 'Eléctrico y silencioso.'),
(5, 'images/autos/mercedezCLA250.jpeg', 'Mercedes-Benz CLA 250', 'Deportivo y chico.'),
(1, 'images/autos/mercedezGLA200.avif', 'Mercedes-Benz GLA 200', 'Lindo y urbano.'),
(2, 'images/autos/mercedezEClass.webp', 'Mercedes-Benz E-Class', 'Auto para la familia.'),
(3, 'images/autos/mercedezGLB200.jpeg', 'Mercedes-Benz GLB 200', 'Ideal para viajes.'),
(4, 'images/autos/mercedezGLE450.webp', 'Mercedes-Benz GLE 450', 'Grande y cómodo.'),
(5, 'images/autos/mercedezAMGGT.jpeg', 'Mercedes-AMG GT', 'Muy rápido y deportivo.');


INSERT INTO comentarios (producto_id, usuario_id, texto)
VALUES
--  comentario de para producto id 1
(1, 2, 'Muy buen auto.'),
(1, 3, 'Me gustó el diseño.'),
(1, 4, 'Anda perfecto.'),

-- 2
(2, 1, 'Muy cómodo.'),
(2, 3, 'Ideal para viajar.'),
(2, 5, 'Lo compraría.'),

-- 3
(3, 2, 'Espacioso y práctico.'),
(3, 4, 'Excelente SUV.'),
(3, 5, 'Me encanta.'),

-- 4
(4, 1, 'Me gusta que sea eléctrico.'),
(4, 2, 'Silencioso.'),
(4, 3, 'Muy moderno.'),

-- 5
(5, 4, 'Deportivo y rápido.'),
(5, 1, 'Buen motor.'),
(5, 2, 'Compacto pero potente.'),

-- 6
(6, 3, 'Perfecto para la ciudad.'),
(6, 5, 'Cómodo y chico.'),
(6, 4, 'Lo compraría sin dudar.'),

-- 7
(7, 2, 'Amplio y elegante.'),
(7, 3, 'Auto ideal para la familia.'),
(7, 5, 'Viajes largos sin problema.'),

-- 8
(8, 1, 'Muy lindo diseño.'),
(8, 4, 'Espacioso.'),
(8, 2, 'Buen equipamiento.'),

-- 9
(9, 3, 'Excelente para vacaciones.'),
(9, 1, 'Muy confiable.'),
(9, 2, 'Gran opción SUV.'),

-- 10
(10, 4, 'Rápido y potente.'),
(10, 5, 'Auto deportivo de verdad.'),
(10, 1, 'Me encanta este modelo.');





