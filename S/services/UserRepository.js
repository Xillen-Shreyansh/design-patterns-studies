class UserRepository {
    constructor() {
        this.users = [];
    }

    save(user) {
        this.users.push(user);
        console.log('User saved to database:', user);
    }

    getAllUsers() {
        return this.users;
    }
}

module.exports = UserRepository;
