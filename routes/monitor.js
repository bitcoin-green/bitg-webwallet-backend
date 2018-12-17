const express = require('express');
const router = express.Router();
const config = require('../config');
const client = config.rpcClient;

// uptime robot check
router.get('/', (req, res, next) => { // eslint-disable-line
  return res.status(200).send({ result: 'ok', message: 'Server is running now !' });
});

router.get('/rpc', (req, res, next) => { // eslint-disable-line
  try {
    return client.call('getinfo', [], (err, result) => {
      if (err) return res.status(400).send({ result: 'error', message: 'RPC provider is not working' });
      return res.status(200).send({ result: 'ok', data: result });
    });
  } catch (err) {
    return res.status(400).send({ result: 'error', message: 'RPC provider is not working' });
  }
});

module.exports = router;
