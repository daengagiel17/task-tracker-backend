'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.times);
    }
  };
  tasks.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.STRING,
    totalSeconds: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};