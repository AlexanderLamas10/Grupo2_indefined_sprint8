'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductOrder.belongsToMany(models.Product,{
        as:'products',
        through: "ProductOrders",
        foreignKey: "orders_id",
        otherKey: "products_id",
        timestamps: false
        
      });
      ProductOrder.belongsToMany(models.Order,{
        as:'orders',
        through: "ProductOrders",
        foreignKey: "products_id",
        otherKey: "orders_id",
        timestamps: false
      })
    }
  }
  ProductOrder.init({
    products_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductOrder',
  });
  return ProductOrder;
};