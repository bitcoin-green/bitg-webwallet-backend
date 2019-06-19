const express = require('express');
const router = express.Router();

const controller = require('../controllers/rpc');

router.post('/sendrawtransaction', controller.sendrawtransaction);
router.get('/getbalance', controller.getbalance);
router.get('/getunspent', controller.getunspent);

module.exports = router;
