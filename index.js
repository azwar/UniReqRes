/**
 * Standard format for returning success response
 * @param {*} res Response object of route
 * @param {*} params.message String of success message
 * @param {*} params.data Object or Array
 * @param {number} params.statusCode Http Code Status
 * @returns res.send()
 */
 const sendSuccess = (res, params = { message, data, statusCode }) => {
  const { message, data, statusCode } = params
  const dataResponse = { message, data };

  if (statusCode) {
    res = res.status(statusCode);
  }

  return res.send(dataResponse);
};

/**
 * Standard format for returning failed/error response
 * @param {*} res Response object of route
 * @param {*} params.message String of success message
 * @param {*} params.errorObject Error stack object or array
 * @param {number} params.statusCode Http Code Status
 * @returns res.send()
 */
const sendFailed = (res, params = { message, errorObject, statusCode }) => {
  const { message, errorObject, statusCode } = params
  const dataResponse = { message, error: errorObject };
  res = res.status(statusCode || 500);

  console.log('status code', statusCode)

  if (message) {
    dataResponse.message = message;
  }

  if (errorObject) {
    dataResponse.error = errorObject;
  }

  return res.send(dataResponse);
};

module.exports = {
  sendSuccess,
  sendFailed,
};
