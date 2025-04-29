class UserValidator {
    isValid(user) {
        if (!user.name || !user.email) {
            return false;
        }
        if (!user.email.includes('@')) {
            return false;
        }
        return true;
    }
}

module.exports = UserValidator;
