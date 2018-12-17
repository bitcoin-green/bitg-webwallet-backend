const express = require('express');
const router = express.Router();

const controller = require('../controllers/rpc');

router.post('/sendrawtransaction', controller.sendrawtransaction);

module.exports = router;
