import { Op } from 'sequelize'
import Weather from '../models/weather.model.js';


const findOne = async (atTime) => {
  const data = await Weather.findOne({
    where: {
      createdAt: {
        [Op.gte]: atTime
      }
    },
    attributes: { exclude: ['weatherId'] }
  });
  return data;
}

export default {
  findOne
}

