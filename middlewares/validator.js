import moment from 'moment';

export const validateISOFormat = (req, res, next) => {
  const { at } = req.query;
  const isValid = moment(at, moment.ISO_8601).isValid()
  if (!isValid) {
    res.status(400).json({ error: "Time format must be a valid ISO String" })
  }
  next();
}

export const validateNumber = (req, res, next) => {
  const { kioskId } = req.params;  
  if (isNaN(kioskId)) {
    res.status(400).json({ error: "KioskId must be a valid Integer" })
  }
  next();
}

