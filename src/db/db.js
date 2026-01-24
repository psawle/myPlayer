require("dotenv").config();
const mongoose = require("mongoose");


function connectDB(){
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("runningggg")
    }).catch(() => {
        console.log("error")
    })
}


module.exports = connectDB;