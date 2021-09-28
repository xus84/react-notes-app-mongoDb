const express = require("express");
const router = express.Router();
const Note = require("../models/noteModels");

router.route("/create").post((req, res)  => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title, 
        content
    }); 

    newNote.save();
})


module.exports = router; 