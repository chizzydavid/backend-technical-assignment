import StationService from "../services/station.service.js"
import WeatherService from "../services/weather.service.js"


const getAllStationsSnapshot = async (req, res, next) => {
  try {
    const { at: atTime } = req.query;
    const stations = await StationService.findAll(atTime);
    const weather = await WeatherService.findOne(atTime);

    if (!stations || stations.length === 0) {
      return res.status(404).json({ 
        error: 'No stations found for specified time' 
      });
    }
    res.status(200).json({ 
      data: {
        at: stations[0].createdAt,
        stations,
        weather
      }
     });
  } catch(error) {
    next(error)
  }
}


const getOneStationSnapshot = async (req, res, next) => {
  try {
    const { at: atTime } = req.query;
    const { kioskId } = req.params;  
    const station = await StationService.findOne(kioskId, atTime);
    const weather = await WeatherService.findOne(atTime);

    if (!station) {
      return res.status(404).json({ 
        error: 'No station found for kioskId at specified time' 
      });
    }    
    res.status(200).json({ 
      data: {
        at: station.createdAt,
        station,
        weather
      }
     });
  } catch(error) {
    next(error)
  }
}

export default {
  getAllStationsSnapshot,
  getOneStationSnapshot
}

