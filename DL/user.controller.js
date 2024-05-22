const userModel = require('./user.model')

async function create(data) {
   return await userModel.create(data)

}
async function read(filter={}) {
    return await userModel.find(filter)

}

async function readOne(filter) { 
    return await  userModel.findOne(filter)
}

function update() { }
function del() { }

module.exports = { create, read,readOne, update, del }