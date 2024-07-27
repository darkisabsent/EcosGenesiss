const aptos = require('aptos');

const aptosClient = new aptos.AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

exports.createWaterToken = async (amount, ownerAddress) => {
    const payload = {
        type: "entry_function_payload",
        function: "0x1::WaterToken::mint",
        arguments: [amount],
        type_arguments: []
    };
    const txnRequest = await aptosClient.generateTransaction(ownerAddress, payload);
    const signedTxn = await aptosClient.signTransaction(ownerAddress, txnRequest);
    const txnResponse = await aptosClient.submitTransaction(signedTxn);
    return txnResponse;
};
