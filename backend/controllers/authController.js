const User = require('../models/User')

async function register(req, res) {

    // 1. Check if the user exists

    // 2. If they don't ( new user... good!) encrypt the password

    // 3. Add new user to the database (with the encrypted password)

    // 4. Generate a JWT token (the keys... permission slip) and return it to the user
}

async function login(req, res) {
}

module.exports = {
    register,
    login
}