// Single Responsibility Principle

const UserValidator = require('./services/UserValidator');
const UserRepository = require('./services/UserRepository');
const EmailService = require('./services/EmailService');

const validator = new UserValidator();
const repository = new UserRepository();
const emailer = new EmailService();

const user = {
    name: 'Shrey',
    email: 'shrey@test.com',
};

if (validator.isValid(user)) {
    repository.save(user);
    emailer.sendWelcomeEmail(user);
} else {
    console.log('Invalid user data!');
}
