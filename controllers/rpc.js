const axios = require('axios');

const { stringToBoolean } = require('../modules/utils');
const config = require('../config');
const client = config.rpcClient;

exports.sendrawtransaction = (req, res) => {
  const raw = req.body.raw;
  const allowhighfees = stringToBoolean(req.body.allowhighfees);
  const swifttx = stringToBoolean(req.body.swifttx);

  if (!raw) return res.status(400).send({ result: 'error', message: 'Empty raw data!' });

  try {
    return client.call('sendrawtransaction', [raw, allowhighfees, swifttx], (err, result) => {
      if (err) return res.status(400).send({ result: 'error', message: 'Error occured while sending raw transaction', error: err.error });
      return res.status(200).send({ result: 'ok', data: result });
    });
  } catch (error) {
    return res.status(400).send({ result: 'error', message: 'Rpc call error', error });
  }
};

exports.getbalance = (req, res) => {
  if (!req.query.address) return res.status(404).send({ result: 'error', message: 'invalid address' });

  return axios({
    method: 'get',
    url: 'https://www.coinexplorer.net/api/v1/BITG/address/balance?address=' + req.query.address,
  }).then(response => {
    res.status(200).send({ result: 'ok', data: response.data.result });
  }).catch(error => {
    res.status(500).send({ result: 'error', message: 'internal error', error });
  });
};

exports.getunspent = (req, res) => {
  if (!req.query.address) return res.status(404).send({ result: 'error', message: 'invalid address' });

  return axios({
    method: 'get',
    url: 'https://www.coinexplorer.net/api/v1/BITG/address/unspent?address=' + req.query.address,
  }).then(response => {
    res.status(200).send({ result: 'ok', data: response.data.result });
  }).catch(error => {
    res.status(500).send({ result: 'error', message: 'internal error', error });
  });
};