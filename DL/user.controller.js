const userModel = require('./user.model')

function create(data) {
    data.created = new Date()
    userModel.push(data)
    return data

}
function read(filter) {
    if(!filter) return userModel.filter(u => true)
}

function readOne(email) {
    return userModel.find(u=>u.email===email);
}

function update() { }
function del() { }

module.exports = { create, read,readOne, update, del }