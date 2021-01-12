'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('times', [
      {
        date: new Date,
        time: "00:00:10",
        taskId: 1,
      },    
      {
        date: new Date,
        time: "00:00:15",
        taskId: 1,
      },    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
