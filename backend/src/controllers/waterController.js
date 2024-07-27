const blockchainService = require('../services/blockchainService');
const tokenService = require('../services/tokenService');

exports.tokenizeWater = async (req, res) => {
    const { amount, ownerAddress } = req.body;
    try {
        const token = await tokenService.createWaterToken(amount, ownerAddress);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.tradeWater = async (req, res) => {
    const { sellerAddress, buyerAddress, amount } = req.body;
    try {
        const transaction = await blockchainService.tradeWater(sellerAddress, buyerAddress, amount);
        res.status(200).json({ transaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWaterBalance = async (req, res) => {
    const { address } = req.params;
    try {
        const balance = await blockchainService.getWaterBalance(address);
        res.status(200).json({ balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
