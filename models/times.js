'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tasks);
    }
  };
  times.init({
    date: DataTypes.DATE,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'times',
  });
  times.associate = function(models) {
    times.belongsTo(models.tasks, {foreignKey: 'taskId', as: 'task'})
  };
  return times;
};