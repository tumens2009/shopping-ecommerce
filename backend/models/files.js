"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      
      files.belongsTo(Product, { primaryKey: "idProduct" });
    }
  }
  files.init(
    {
      idProduct: DataTypes.INTEGER,
      name: DataTypes.INTEGER,
      path: DataTypes.STRING,
      author_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "files",
    }
  );
  // Cart.sync({ alter: true });
  return files;
};
