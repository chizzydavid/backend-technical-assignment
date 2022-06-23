'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Batch', {
      batchId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Batch');
  },
};


