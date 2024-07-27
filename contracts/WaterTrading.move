WaterTrading {
    import 0x1::WaterToken;

    // Trade water tokens between a seller and a buyer
    public fun trade_water(seller: &signer, buyer: address, amount: u64) acquires WaterToken {
        let seller_balance = borrow_global_mut<WaterToken>(Signer::address_of(seller));
        let buyer_balance = borrow_global_mut<WaterToken>(buyer);

        assert!(seller_balance.balance >= amount, 1); // Ensure sufficient balance
        seller_balance.balance -= amount;
        buyer_balance.balance += amount;
    }

    // Initialize trading for a specific contract (optional, if needed)
    public fun initialize_trading(account: &signer) {
        // This function can be used for additional setup if required
    }
}