const express = require("express");
const multer = require("multer");
const router = express.Router();
const uploadFile = require("../service/storage.service") 

const upload = multer({storage:multer.memoryStorage()})

router.post("/songs", upload.single("audio"), async (req, res) => {
    try {
      console.log("Body:", req.body);
      console.log("File:", req.file);
  
      if (!req.file) {
        return res.status(400).json({ error: "No audio file" });
      }
  
      const fileData = await uploadFile(req.file);
  
      console.log("Upload Result:", fileData); // ✅
  
      res.status(201).json({
        message: "Song created successfully",
        audioUrl: fileData.url,
        song: req.body,
      });
  
    } catch (err) {
      console.error("Route Error:", err);
  
      res.status(500).json({
        error: "Upload failed",
        details: err.message,
      });
    }
  });
  





module.exports = router;