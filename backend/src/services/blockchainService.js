const aptos = require('aptos');
const aptosClient = new aptos.AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

exports.tradeWater = async (sellerAddress, buyerAddress, amount) => {
    const payload = {
        type: "entry_function_payload",
        function: "0x1::WaterTrading::trade_water",
        arguments: [sellerAddress, buyerAddress, amount],
        type_arguments: []
    };
    const txnRequest = await aptosClient.generateTransaction(sellerAddress, payload);
    const signedTxn = await aptosClient.signTransaction(sellerAddress, txnRequest);
    const txnResponse = await aptosClient.submitTransaction(signedTxn);
    return txnResponse;
};

exports.getWaterBalance = async (address) => {
    const resources = await aptosClient.getAccountResources(address);
    const balanceResource = resources.find(r => r.type === "0x1::WaterToken::WaterToken");
    return balanceResource ? balanceResource.data.balance : 0;
};
