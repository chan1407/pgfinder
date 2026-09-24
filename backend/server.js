const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JSON API is running");
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
