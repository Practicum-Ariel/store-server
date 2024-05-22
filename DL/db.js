const mongoose = require('mongoose')
const MONGO_URL=''

const connect = async () => {
    try {
        mongoose.connect(MONGO_URL)
        .then(() => console.log("#### DB Connected ####"))
    }
    catch(err) {
        console.log("####### ERROR DB ######\n",err);
    }
}

module.exports = { connect }