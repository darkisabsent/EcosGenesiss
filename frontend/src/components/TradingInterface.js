import React, { useState } from 'react';
import { handleTradeWater } from '../services/blockchainService';

function TradingInterface() {
    const [sellerAddress, setSellerAddress] = useState('');
    const [buyerAddress, setBuyerAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleTrade = async (e) => {
        e.preventDefault();
        try {
            const result = await handleTradeWater(sellerAddress, buyerAddress, amount);
            console.log('Trading successful:', result);
        } catch (error) {
            console.error('Trading error:', error);
        }
    };

    return (
        <form onSubmit={handleTrade}>
            <label>
                Seller Address:
                <input
                    type="text"
                    value={sellerAddress}
                    onChange={(e) => setSellerAddress(e.target.value)}
                />
            </label>
            <label>
                Buyer Address:
                <input
                    type="text"
                    value={buyerAddress}
                    onChange={(e) => setBuyerAddress(e.target.value)}
                />
            </label>
            <label>
                Amount of Water to Trade:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button type="submit">Trade</button>
        </form>
    );
}

export default TradingInterface;
