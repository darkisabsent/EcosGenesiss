const API_BASE_URL = 'http://localhost:5000/api/water'; // Base URL for your backend API

// Function to tokenize water
export async function tokenizeWater(amount) {
    try {
        const response = await fetch(`${API_BASE_URL}/tokenize`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
        });
        if (!response.ok) throw new Error('Failed to tokenize water');
        return await response.json();
    } catch (error) {
        console.error('Error tokenizing water:', error);
        throw error;
    }
}

// Function to trade water
export async function tradeWater(sellerAddress, buyerAddress, amount) {
    try {
        const response = await fetch(`${API_BASE_URL}/trade`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sellerAddress, buyerAddress, amount })
        });
        if (!response.ok) throw new Error('Failed to trade water');
        return await response.json();
    } catch (error) {
        console.error('Error trading water:', error);
        throw error;
    }
}

// Function to get water balance
export async function getWaterBalance(address) {
    try {
        const response = await fetch(`${API_BASE_URL}/balance/${address}`);
        if (!response.ok) throw new Error('Failed to get water balance');
        return await response.json();
    } catch (error) {
        console.error('Error getting water balance:', error);
        throw error;
    }
}
