import moment from 'moment';

/**
 * Validator Middleware for ISO String
 *
 * @param {request} request
 * @param {response} reponse
 * @param {function} next
 * @returns {void}
 */
export const validateISOFormat = (req, res, next) => {
  const { at } = req.query;
  if (!at) {
    return res.status(400).json({ 
      error: "Timestamp for snapshot is required"
    })
  } 
  const isValid = moment(at, moment.ISO_8601).isValid()
  if (!isValid) {
    return res.status(400).json({ 
      error: "Time format must be a valid ISO String"
    })
  }
  next();
}


/**
 * Validator Middleware for Valid Integers
 *
 * @param {request} request
 * @param {response} reponse
 * @param {function} next
 * @returns {void}
 */

export const validateNumber = (req, res, next) => {
  const { kioskId } = req.params;  
  if (isNaN(kioskId)) {
    return res.status(400).json({ 
      error: "KioskId must be a valid Integer"
    })
  }
  next();
}

