const config = require('../config');
const client = config.rpcClient;

exports.sendrawtransaction = (req, res) => {
  const raw = req.body.raw;
  const allowhighfees = Boolean(req.body.allowhighfees);
  const swifttx = Boolean(req.body.swifttx);

  if (!raw) return res.status(400).send({ result: 'error', message: 'Empty raw data!' });

  try {
    return client.call('sendrawtransaction', [raw, allowhighfees, swifttx], (err, result) => {
      if (err) return res.status(400).send({ result: 'error', err });
      return res.status(200).send({ result: 'ok', data: result });
    });
  } catch (error) {
    return res.status(400).send({ result: 'error', error });
  }
};
