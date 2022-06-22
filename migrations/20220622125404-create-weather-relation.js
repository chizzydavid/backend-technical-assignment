
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Weather', {
      weatherId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      coord: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      weather: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: true
      },
      base: {
        type: Sequelize.STRING,
        allowNull: true
      },
      main: {
        type: Sequelize.JSON,
        allowNull: true
      },
      visibility: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      wind: {
        type: Sequelize.JSON,
        allowNull: true
      },
      clouds: {
        type: Sequelize.JSON,
        allowNull: true
      },
      dt: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sys: {
        type: Sequelize.JSON,
        allowNull: true
      },
      timezone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },    
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cod: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Weather');
  },
};