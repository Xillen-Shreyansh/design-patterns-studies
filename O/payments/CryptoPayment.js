const PaymentProcessor = require('./PaymentProcessor');

class CryptoPayment extends PaymentProcessor {
    pay(amount) {
        console.log(`Paid ₹${amount} using Crypto.`);
    }
}

module.exports = CryptoPayment;
