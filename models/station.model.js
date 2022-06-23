import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../utils/db/index.js'


const Station = sequelize.define(
  'Station',
  {
    stationId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
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
      allowNull: true
    },
    docksAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },            
    classicBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smartBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
    }, 
    electricBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rewardBikesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rewardDocksAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true
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
      allowNull: true
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: true,
    tableName: 'Station'
  }
);

export default Station;
