const rpc = require('json-rpc2');
const rpcClient = rpc.Client.$create(
  '9332', // RPC_PORT
  '127.0.0.1', // RPC_HOST
  'user', // RPC_USER
  'PASSWORD' // RPC_PASS
);

const config = {
  rpcClient,
};
module.exports = config;
