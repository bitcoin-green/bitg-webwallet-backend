const monitorRouter = require('./monitor');
const rpcRouter = require('./rpc');
module.exports = function (app) {
  app.use('/api/v1/monitor', monitorRouter);
  app.use('/api/v1/rpc', rpcRouter);
};
