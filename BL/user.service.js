const  userController = require('../DL/user.controller')

function getAllUsers() {
    return userController.read()
}

function getSingleUser(email) {
    if (!email) throw { message: "invalid email" }

    return userController.readOne(email)
    // 
}

function addNewUser(body) {
    let { email, password, fullName } = body

    let user = getSingleUser(email)
    if (user) throw { message: "user is exist" }
    if (password.length < 6) throw { message: "password is incorrect" }
    
     
    user = { email, password, fullName}
    let userDB = userController.create(user)

    return userDB
}

function updateUser(body) {}

function deleteUser(body) {}

module.exports = { getAllUsers, getSingleUser, addNewUser }