class EmailService {
    sendWelcomeEmail(user) {
        console.log(`Welcome email sent to: ${user.email}`);
    }
}

module.exports = EmailService;
