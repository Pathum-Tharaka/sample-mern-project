//password=Mdcb9SRbRtu3lPVm

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/projectRoute");

const app = express();
const cors = require("cors");


//midleware
app.use(express.json());
app.use(cors());
app.use("/projects", router);


mongoose.connect("mongodb+srv://admin:Mdcb9SRbRtu3lPVm@cluster0.johvx9b.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
    
})
.catch((err) => console.log(err));