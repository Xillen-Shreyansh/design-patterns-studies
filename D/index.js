// Dependency Inversion Principle

const EmailNotifier = require('./notifiers/EmailNotifier');
const SMSNotifier = require('./notifiers/SMSNotifier');

// High-level module
class OrderService {
    constructor(notifier) {
        this.notifier = notifier;
    }

    placeOrder(orderDetails) {
        console.log(`--> Order placed: ${orderDetails}`);
        this.notifier.send(`Order confirmation: ${orderDetails}`);
    }
}

// Injecting EmailNotifier
const emailNotifier = new EmailNotifier();
const orderWithEmail = new OrderService(emailNotifier);
orderWithEmail.placeOrder("Laptop");

// Injecting SMSNotifier
const smsNotifier = new SMSNotifier();
const orderWithSMS = new OrderService(smsNotifier);
orderWithSMS.placeOrder("Mobile Phone");
