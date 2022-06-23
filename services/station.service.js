import { Op } from 'sequelize'
import Station from '../models/station.model.js';


const findAll = async (atTime) => {
  const data = await Station.findAll({
    where: {
      createdAt: {
        [Op.gte]: atTime
      }
    },   
    attributes: { exclude: ['stationId'] },
    order: [['createdAt', 'DESC']]
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

