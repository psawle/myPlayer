const express = require("express");

const connectToDB = require("./src/db/db")
const noteModel = require("./src/models/note.models")

const server = express();
server.use(express.json());


server.post("/notes",async(req,res) => {
    const {title ,content} = req.body;

    console.log("title",title)

    await noteModel.create(({
        title,content
    }))

    res.json("note created successfully");
})

server.get("/notes", async (req,res) => {
    const note = await noteModel.find();

    res.json({
        message : "data fetched sucessfully",
        note
    })
})

server.delete("/notes/:id", async (req,res) => {
       const noteId = req.params.id;

       await noteModel.findOneAndDelete({
        _id:noteId
       })

       res.json({ message : "note deleted sucessfully" })
})

server.patch("/notes/:id", async (req,res) => {
    const noteId = req.params.id;
    const {title} = req.body;

    await noteModel.findOneAndUpdate({
        _id:noteId
    },{
        title:title
    }
)
res.json({
    message: "note updated successfully",
})
})


 
connectToDB()
server.listen(3000, () => {
    console.log("post is running on port 3000")
})