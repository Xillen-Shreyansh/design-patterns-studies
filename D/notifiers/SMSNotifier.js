const Notifier = require('./Notifier');

class SMSNotifier extends Notifier {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

module.exports = SMSNotifier;
