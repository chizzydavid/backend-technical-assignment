'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Station', 'batchId', {
        allowNull: false,
        type: Sequelize.STRING
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Station', 'batchId'),
    ]);
  },
};


