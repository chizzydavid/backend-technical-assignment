
/**
 * Express Error Handling Middleware
 *
 * @param {object} error
 * @param {request} request
 * @param {response} reponse
 * @param {function} next
 * @returns {void}
 */
export const errorHandler = (error, request, response, next) => {
  const statusCode = error.status || 500;
  const message = error.message || 'Something went wrong, please try again.'

  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    console.log(JSON.stringify({error: message}))
  }

  response.header("Content-Type", 'application/json');
  response.status(statusCode).json({
    success: false,
    error: {
      statusCode: statusCode,
      message: message,
    },
  });
}


/**
 * Invalid Path Handler
 *
 * @param {request} request
 * @param {response} reponse
 * @param {function} next
 * @returns {void}
 */

export const invalidPathHandler = (request, response, next) => {
  response.status(404)
  response.send('Path not found')
}
  
  
