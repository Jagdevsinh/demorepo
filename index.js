const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoute.js");

const app = express();
const PORT = 80;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://jr5234033_db_user:<db_password>@node.4lvrr1x.mongodb.net/?retryWrites=true&w=majority&appName=Node",  // <-- Replace with your actual MongoDB connection string
  
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running :127.0.0.1:" + PORT);
});
