import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../utils/db/index.js'


const Station = sequelize.define(
  'Station',
  {
    stationId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      defaultValue: Sequelize.literal('gen_random_uuid')
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coordinates: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },  
    totalDocks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    docksAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },            
    classicBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },    
    smartBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    electricBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rewardBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rewardDocksAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kioskStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kioskPublicStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },            
    kioskConnectionStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kioskType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },    
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressState: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressZipCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bikes: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    isVirtual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isEventBased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    closeTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eventEnd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eventStart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    openTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    publicText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    timeZone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kioskId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
);

export default Station;
