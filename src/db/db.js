const mongoose = require("mongoose");

 function connectToDB () {

    mongoose.connect("mongodb+srv://psawle4_db_user:UguQnfp4Ez6eGN79@cluster0.cim2kbu.mongodb.net/natours").then(() => {
        console.log("Connected to db")
    })
}

module.exports = connectToDB