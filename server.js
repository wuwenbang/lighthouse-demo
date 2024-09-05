const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
