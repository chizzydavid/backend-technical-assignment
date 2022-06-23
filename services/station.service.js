import { Op } from 'sequelize'
import Station from '../models/station.model.js';
import Batch from '../models/batch.model.js';


const findAll = async (atTime) => {
  const earliestBatch = await Batch.findAll({
    where: {
      createdAt: { [Op.gte]: atTime }
    },
    order: [['createdAt', 'DESC']],
    raw: true
  });
  if (!earliestBatch || earliestBatch.length === 0) {
    return earliestBatch;
  }
  const data = await Station.findAll({
    where: { batchId: earliestBatch[0].batchId },
    attributes: { exclude: ['stationId', 'batchId', 'createdAt', 'updatedAt'] }
  });
  return data;
}

const findOne = async (kioskId, atTime) => {
  const data = await Station.findOne({
    where: {
      kioskId,
      createdAt: {
        [Op.gte]: atTime
      }
    },
    attributes: { exclude: ['stationId'] },
    order: [['createdAt', 'DESC']]
  });
  return data;
}

export default {
  findAll,
  findOne
}

