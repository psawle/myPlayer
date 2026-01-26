require("dotenv").config();

const express = require("express")
const connectDB = require("./db/db")
const songRoutes = require("./routes/song.routes")

connectDB();


const app = express();
app.use(express.json());

app.use("/",songRoutes)


module.exports = app;