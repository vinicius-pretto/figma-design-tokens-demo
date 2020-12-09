const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.use(compression());
app.use(express.static("public"));

app.get("/slides", (req, res) => {
  res.sendFile(path.resolve("public/slides.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

module.exports = app;
