'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Station', 'totalDocks', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'docksAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'bikesAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'classicBikesAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),      
      queryInterface.changeColumn('Station', 'smartBikesAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'electricBikesAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'rewardBikesAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'kioskType', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),      
      queryInterface.changeColumn('Station', 'trikesAvailable', {
        type: Sequelize.INTEGER,
        allowNull: true
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([]);
  },
};


