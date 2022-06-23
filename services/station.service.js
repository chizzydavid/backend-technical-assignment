import { Op } from 'sequelize'
import Station from '../models/station.model.js';
import Batch from '../models/batch.model.js';

/**
 * Retrieves the latest Station Snapshots for the passed timestamp
 *
 * @param {string} atTime
 * @returns {Object} 
 */
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
    attributes: { exclude: ['stationId', 'batchId', 'updatedAt'] }
  });
  return data;
}

/**
 * Retrieves latest Snapshot for a Single Station
 *
 * @param {number} kioskId
 * @param {string} atTime
 * @returns {Object}
 */

const findOne = async (kioskId, atTime) => {
  const data = await Station.findOne({
    where: {
      kioskId,
      createdAt: {
        [Op.gte]: atTime
      }
    },
    attributes: { exclude: ['stationId', 'batchId', 'updatedAt'] },
    order: [['createdAt', 'DESC']]
  });
  return data;
}

export default {
  findAll,
  findOne
}

