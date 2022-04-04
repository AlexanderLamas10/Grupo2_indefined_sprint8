'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Payment,{ // models.Genre -> Genres es el valor de alias en genres.js
        as: "payments",
        foreignKey: "payments_id"
      })
      Order.hasOne(models.User,{
        as:'users',
        foreignKey:'users_id'
      })

      Order.belongsToMany(models.Product,{ // models.Actor -> Actors es el valor de alias en actor.js
        as: "products",
        through:'productOrders',
        foreignKey: 'orders_id',
        otherKey: "product_id",
        timestamps: false
      })
    }
  }
  Order.init({
    date: DataTypes.DATEONLY,
    total: DataTypes.DECIMAL,
    users_id: DataTypes.INTEGER,
    payments_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};