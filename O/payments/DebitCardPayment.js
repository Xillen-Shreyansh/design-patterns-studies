const PaymentProcessor = require('./PaymentProcessor');

class DebitCardPayment extends PaymentProcessor {
    pay(amount) {
        console.log(`Paid ₹${amount} using Debit Card.`);
    }
}

module.exports = DebitCardPayment;
