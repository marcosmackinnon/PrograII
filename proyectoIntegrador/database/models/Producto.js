module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
  
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER.UNSIGNED
      },
      usuario_id: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      imagen_nombre: {
        type: dataTypes.STRING(255)
      },
      nombre: {
        type: dataTypes.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: dataTypes.TEXT,
        allowNull: false
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
      tableName: "productos",
      timestamps: true,
      paranoid: true
    };
  
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
  };
  