const mongoose = require("mongoose");

const songScehma = new mongoose.Schema({
    title :String,
    artist:String,
    audio:String,
})

const song = mongoose.model('song',songScehma)

module.exports = song;