import React, { useState, useEffect } from 'react';
import { handleGetWaterBalance } from '../services/blockchainService';

function BalanceDisplay() {
    const [address, setAddress] = useState(''); // State for storing the user's address
    const [balance, setBalance] = useState(null); // State for storing the user's balance
    const [loading, setLoading] = useState(false); // State for loading status
    const [error, setError] = useState(null); // State for handling errors

    useEffect(() => {
        if (address) {
            const fetchBalance = async () => {
                setLoading(true);
                try {
                    const result = await handleGetWaterBalance(address);
                    setBalance(result.balance); // Assuming the API response has a 'balance' field
                } catch (error) {
                    console.error('Error fetching balance:', error);
                    setError('Failed to fetch balance');
                } finally {
                    setLoading(false);
                }
            };

            fetchBalance();
        }
    }, [address]); // Fetch balance whenever the address changes

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div>
            <h2>Water Token Balance</h2>
            <label>
                Enter your address:
                <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Enter address"
                />
            </label>
            <button onClick={() => setAddress(address)}>Check Balance</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {balance !== null && !loading && !error && (
                <p>Your balance: {balance} H2O Tokens</p>
            )}
        </div>
    );
}

export default BalanceDisplay;
