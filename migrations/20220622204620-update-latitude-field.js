module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Station', 'coordinates', {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: true
      }),
      queryInterface.changeColumn('Station', 'latitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),      
      queryInterface.changeColumn('Station', 'longitude', {
        type: Sequelize.FLOAT,
        allowNull: true
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([]);
  },
};

