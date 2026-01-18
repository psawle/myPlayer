const mongoose = require("mongoose");

function connectDB () {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("connected to db")
    }).catch(() => {
        console.log("Error")
    })
}

module.exports = connectDB;