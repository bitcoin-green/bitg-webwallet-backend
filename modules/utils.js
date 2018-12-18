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

exports.toBoolean = function (string) {
  switch (string.toLowerCase().trim()) {
    case 'true': case 'yes': case '1': return true;
    case 'false': case 'no': case '0': case null: return false;
    default: return Boolean(string);
  }
};
