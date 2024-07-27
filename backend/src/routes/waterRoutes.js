const express = require('express');
const router = express.Router();
const waterController = require('../controllers/waterController');

router.post('/tokenize', waterController.tokenizeWater);
router.post('/trade', waterController.tradeWater);
router.get('/balance/:address', waterController.getWaterBalance);

module.exports = router;
