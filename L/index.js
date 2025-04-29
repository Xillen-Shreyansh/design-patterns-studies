// Liskov Substitution Principle

const EmailNotifier = require('./notifiers/EmailNotifier');
const SMSNotifier = require('./notifiers/SMSNotifier');

// Function that uses the base Notifier type
function notifyUser(notifier, message) {
    notifier.send(message); // works as long as notifier behaves like Notifier
}

notifyUser(new EmailNotifier(), 'The email has been sent!');
notifyUser(new SMSNotifier(), 'The SMS has been sent!');