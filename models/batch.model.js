import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../utils/db/index.js'
import Station from './station.model.js';


const Batch = sequelize.define(
  'Batch',
  {
    batchId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    tableName: 'Batch'
  }
);

Batch.hasMany(Station, {
  foreignKey: 'batchId'
});

Station.belongsTo(Batch, {
  foreignKey: 'batchId'
});

export default Batch;
