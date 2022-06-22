import Weather from "../models/weather.model.js"


const getAll = async (req, res, nex) => {
  const data = await Weather.findAll({});
  res.status(200).json(data);
}

export default {
  getAll
}


