// define local node object
const config = require('../config');
const client = config.rpcClient;

exports.promisify = function (fn, args) {
  return new Promise((resolve, reject) => {
    try {
      client.call(fn, args, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
};
