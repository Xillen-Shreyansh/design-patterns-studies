// Base class
class PaymentProcessor {
    pay(amount) {
        throw new Error('pay() method must be implemented');
    }
}

module.exports = PaymentProcessor;
