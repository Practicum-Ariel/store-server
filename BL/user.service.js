const userController = require('../DL/user.controller')

async function getAllUsers() {
    return await userController.read()
}

async function getSingleUser(email) {
    if (!email) throw { message: "invalid email" }

    return await userController.readOne({ email: email })
    // 
}

async function addNewUser(body) {
    let { email, password, fullName } = body

    let user = await getSingleUser(email)
    if (user) throw { message: "user is exist" }
    if (password && password.length < 6) throw { message: "password is incorrect" }


    user = { email, password, fullName }
    let userDB = await userController.create(user)

    return userDB
}

function updateUser(body) { }

function deleteUser(body) { }

module.exports = { getAllUsers, getSingleUser, addNewUser }