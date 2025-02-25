import { Op } from 'sequelize'
import Weather from '../models/weather.model.js';

/**
 * Retrieves Weather Information for passed timestamp
 *
 * @param {string} atTime
 * @returns {Object}
 */
const findOne = async (atTime) => {
  const data = await Weather.findOne({
    where: {
      createdAt: {
        [Op.gte]: atTime
      }
    },
    attributes: { exclude: ['weatherId'] },
    order: [['createdAt', 'DESC']]
  });
  return data;
}

export default {
  findOne
}

