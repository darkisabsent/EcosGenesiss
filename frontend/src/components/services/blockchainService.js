import { tokenizeWater, tradeWater, getWaterBalance } from '../api/waterAPI';

// Service function to tokenize water
export async function handleTokenizeWater(amount) {
    try {
        return await tokenizeWater(amount);
    } catch (error) {
        console.error('Service error during water tokenization:', error);
        throw error;
    }
}

// Service function to trade water
export async function handleTradeWater(sellerAddress, buyerAddress, amount) {
    try {
        return await tradeWater(sellerAddress, buyerAddress, amount);
    } catch (error) {
        console.error('Service error during water trading:', error);
        throw error;
    }
}

// Service function to get water balance
export async function handleGetWaterBalance(address) {
    try {
        return await getWaterBalance(address);
    } catch (error) {
        console.error('Service error during fetching water balance:', error);
        throw error;
    }
}
