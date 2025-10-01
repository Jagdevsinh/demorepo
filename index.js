const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./Routes/studentRoute.js");

const app = express();
const PORT = 80;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://jr5234033_db_user:jagdevsinh1247@node.4lvrr1x.mongodb.net/?retryWrites=true&w=majority&appName=Node",  // <-- Replace with your actual MongoDB connection string
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running :127.0.0.1:" + PORT);
});
