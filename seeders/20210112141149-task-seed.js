'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks', [
    {
      title: 'Task A',
      description: "It is a description of task A",
      time: '00:00:25',
      totalSeconds: 25,
    },
    {
      title: 'Task B',
      description: "It is a description of task B",
      time: '00:00:00',
      totalSeconds: 0,
    },
    {
      title: 'Task C',
      description: "It is a description of task C",
      time: '00:00:00',
      totalSeconds: 0,
    }  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
