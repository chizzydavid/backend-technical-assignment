
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Station', {
      stationId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      coordinates: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true
      },  
      totalDocks: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      docksAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bikesAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },            
      classicBikesAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },    
      smartBikesAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      }, 
      electricBikesAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rewardBikesAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rewardDocksAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kioskStatus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      kioskPublicStatus: {
        type: Sequelize.STRING,
        allowNull: true
      },            
      kioskConnectionStatus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      kioskType: {
        type: Sequelize.INTEGER,
        allowNull: false
      },    
        addressStreet: {
        type: Sequelize.STRING,
        allowNull: true
      },
      addressCity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      addressState: {
        type: Sequelize.STRING,
        allowNull: true
      },
      addressZipCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bikes: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: true
      },
      isVirtual: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isEventBased: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      closeTime: {
        type: Sequelize.STRING,
        allowNull: true
      },
      eventEnd: {
        type: Sequelize.STRING,
        allowNull: true
      },
      eventStart: {
        type: Sequelize.STRING,
        allowNull: true
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true
      },
      openTime: {
        type: Sequelize.STRING,
        allowNull: true
      },
      publicText: {
        type: Sequelize.STRING,
        allowNull: true
      },
      timeZone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      kioskId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      trikesAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Station');
  },
};