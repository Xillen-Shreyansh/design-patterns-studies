const PaymentProcessor = require('./PaymentProcessor');

class CreditCardPayment extends PaymentProcessor {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card.`);
    }
}

module.exports = CreditCardPayment;
