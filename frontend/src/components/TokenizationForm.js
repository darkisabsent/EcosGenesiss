import React, { useState } from 'react';
import { handleTokenizeWater } from '../services/blockchainService';

function TokenizationForm() {
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await handleTokenizeWater(amount);
            console.log('Tokenization successful:', result);
        } catch (error) {
            console.error('Tokenization error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount of Water to Tokenize:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button type="submit">Tokenize</button>
        </form>
    );
}

export default TokenizationForm;
