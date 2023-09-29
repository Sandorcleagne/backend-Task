const express = require("express");
const cors = require("cors");
const connectdb = require("./connection/connection");
const authRoutes = require("./routes/authRoutes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
connectdb();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", authRoutes);
app.get("/", async (req, res) => res.json("Home Page"));

app.listen(PORT, () => {
  console.log(`server is listen on http://localhost:${PORT}`);
});
