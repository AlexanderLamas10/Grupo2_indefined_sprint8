'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Avatar, { // models.Genre -> Genres es el valor de alias en genres.js
        as: "avatars",
        foreignKey: "users_id"
      })
      User.belongsTo(models.Roles, {
        as: "rols",
        foreignKey: "roles_id"
      })
      User.belongsTo(models.Order, {
          as: "orders",
          foreignKey: "users_id"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    password: DataTypes.STRING,
    roles_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};