const snakeCase = require('lodash/snakeCase');
const config = require('./config.local.json');

function processEnvForKey(acc, key, data, longKey = key) {
  const isObject = (data instanceof Object);
  const isArray = (Array === data.constructor);
  const convertedKey = snakeCase(longKey).toUpperCase();

  let partialResult;

  if (!isObject || isArray) {
    partialResult = process.env[convertedKey] || data;
  } else {
    partialResult = Object.keys(data).reduce(
      (childAcc, child) => processEnvForKey(childAcc, child, data[child], `${longKey}.${child}`),
      {}
    );
  }

  if (partialResult === 'true') {
    partialResult = true;
  }
  if (partialResult === 'false') {
    partialResult = false;
  }
  acc[key] = partialResult; // eslint-disable-line no-param-reassign

  return acc;
}

module.exports = Object.keys(config).reduce(
  (acc, key) => processEnvForKey(acc, key, config[key]),
  {}
);
