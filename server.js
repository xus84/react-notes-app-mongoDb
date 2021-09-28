const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/Notes')

app.use("/", require("./routes/noteRoute"))


app.listen(3001, () => {
    console.log("Server on port 3001")
})