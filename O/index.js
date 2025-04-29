// Open/Closed Principle

const CreditCardPayment = require('./payments/CreditCardPayment');
const DebitCardPayment = require('./payments/DebitCardPayment');
const CryptoPayment = require('./payments/CryptoPayment');

function makePayment(paymentProcessor, amount) {
    paymentProcessor.pay(amount);
}

makePayment(new CreditCardPayment(), 500);
makePayment(new DebitCardPayment(), 1200);
makePayment(new CryptoPayment(), 6000);
