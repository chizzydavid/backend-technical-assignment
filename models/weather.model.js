import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../utils/db/index.js'


const Weather = sequelize.define(
  'Weather',
  {
    weatherId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    coord: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    weather: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    base: {
      type: DataTypes.STRING,
      allowNull: true
    },
    main: {
      type: DataTypes.JSON,
      allowNull: true
    },
    visibility: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wind: {
      type: DataTypes.JSON,
      allowNull: true
    },
    clouds: {
      type: DataTypes.JSON,
      allowNull: true
    },
    dt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sys: {
      type: DataTypes.JSON,
      allowNull: true
    },
    timezone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cod: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: true,
  }
);

export default Weather;
