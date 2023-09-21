// Bank Account Class
class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            throw new Error("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        } else {
            throw new Error("Insufficient funds or invalid withdrawal amount.");
        }
    }
}

// Initialize the bank account
const account = new BankAccount("John Doe", "Savings");

// Display account information
document.getElementById("account-holder").textContent = account.accountHolder;
document.getElementById("account-type").textContent = account.accountType;
document.getElementById("balance").textContent = account.balance;

// Handle deposit button click
document.getElementById("deposit").addEventListener("click", () => {
    try {
        const amount = parseFloat(document.getElementById("amount").value);
        if (!isNaN(amount)) {
            if (account.deposit(amount)) {
                document.getElementById("balance").textContent = account.balance;
                document.getElementById("error-message").textContent = "";
            }
        } else {
            throw new Error("Invalid input.");
        }
    } catch (error) {
        document.getElementById("error-message").textContent = error.message;
    }
});

// Handle withdraw button click
document.getElementById("withdraw").addEventListener("click", () => {
    try {
        const amount = parseFloat(document.getElementById("amount").value);
        if (!isNaN(amount)) {
            if (account.withdraw(amount)) {
                document.getElementById("balance").textContent = account.balance;
                document.getElementById("error-message").textContent = "";
            }
        } else {
            throw new Error("Invalid input.");
        }
    } catch (error) {
        document.getElementById("error-message").textContent = error.message;
    }
});
