const Notifier = require('./Notifier');

class EmailNotifier extends Notifier {
    send(message) {
        console.log(`Sending Email: ${message}`);
    }
}

module.exports = EmailNotifier;
