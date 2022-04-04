'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Image,{
        as: "images",
        foreignKey: "products_id"
      })
      Product.belongsTo(models.Discount,{
          as: "discounts",
          foreignKey: "discounts_id"
      })
      Product.belongsTo(models.Category,{
        as: "categories",
        foreignKey: "categories_id"
      })
      Product.belongsTo(models.Size,{
      as: "sizes",
      foreignKey: "sizes_id"
      })
      Product.belongsTo(models.Color,{
        as: "colors",
        foreignKey: "colors_id"
        })
      Product.belongsToMany(models.Order,{
        as: "orders",
        through: "productOrders",
        foreignKey: "products_id",
        otherKey: "orders_id",
        timestamps: false
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categories_id: DataTypes.INTEGER,
    sizes_id: DataTypes.INTEGER,
    colors_id: DataTypes.INTEGER,
    visibility: DataTypes.INTEGER,
    recommended: DataTypes.INTEGER,
    discounts_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};