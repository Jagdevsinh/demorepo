const express = require("express");
const mongoose=require("mongoose");
const studentRoute=require("./Routes/studentRoute.js");
const app = express();
const PORT = 80;
app.use(express.json());
mongoose.connect(
    "mongodb+srv:/",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
);
app.use("/song",studentRoute);
app.listen(PORT,()=>{
    console.log("server is running :127.0.0.1"+PORT);
});