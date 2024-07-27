module 0x1::WaterToken {
    struct WaterToken {
        balance: u64,
    }

    // Initialize a new water token resource for an account
    public fun initialize(account: &signer) {
        move_to(account, WaterToken { balance: 0 });
    }

    // Mint new water tokens for the account
    public fun mint(account: &signer, amount: u64) {
        let balance = borrow_global_mut<WaterToken>(Signer::address_of(account));
        balance.balance += amount;
    }

    // Transfer water tokens from one account to another
    public fun transfer(from: &signer, to: address, amount: u64) acquires WaterToken {
        let from_balance = borrow_global_mut<WaterToken>(Signer::address_of(from));
        let to_balance = borrow_global_mut<WaterToken>(to);

        assert!(from_balance.balance >= amount, 1); // Ensure sufficient balance
        from_balance.balance -= amount;
        to_balance.balance += amount;
    }

    // Get the balance of an account
    public fun get_balance(account: address): u64 acquires WaterToken {
        let balance = borrow_global<WaterToken>(account);
        balance.balance
    }
}
