const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PG Finder API is running");
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("/api/pgs", (req, res) => {
  res.json(data.pgs);
});

app.get("/api/pgs/:id", (req, res) => {
  const { id } = req.params;

  console.log("Requested PG ID:", id);

  const pg = data.pgs.find((item) => String(item.id) === String(id));

  if (!pg) {
    return res.status(404).json({
      message: "PG not found",
    });
  }

  res.json(pg);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
