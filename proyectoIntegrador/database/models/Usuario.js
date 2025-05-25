module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario"; // alias del modelo, que sirve para identificar relaciones, usuario representa la tabla usuarios.
  
    let cols = { //Acá defino todas las columnas de la tabla, con su nombre, tipo y restricciones.
      id: { // Esta parte se llama cols, que es un objeto donde cada clave representa una columna de la tabla usuarios.
        autoIncrement: true, 
        primaryKey: true,
        type: dataTypes.INTEGER.UNSIGNED
      },
      email: {
        type: dataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      contrasena: {
        type: dataTypes.STRING(300),
        allowNull: false
      },
      fecha_nacimiento: {
        type: dataTypes.DATE,
        allowNull: false
      },
      dni: {
        type: dataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      foto_perfil: {
        type: dataTypes.STRING(300)
      },
      createdAt: {
        type: dataTypes.DATE
      },
      updatedAt: {
        type: dataTypes.DATE
      },
      deletedAt: {
        type: dataTypes.DATE
      }
    };
  
    let config = {
      tableName: "usuarios",
      timestamps: true,
      paranoid: true
    };
  
    const Usuario = sequelize.define(alias, cols, config);
  
    return Usuario;
  };
  