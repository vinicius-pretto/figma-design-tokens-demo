const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.use(compression());
app.use(express.static("public"));

app.get("/en/slides", (req, res) => {
  res.sendFile(path.resolve("public/en/slides/index.html"));
});

app.get("/slides", (req, res) => {
  res.sendFile(path.resolve("public/slides/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/en", (req, res) => {
  res.sendFile(path.resolve("public/en/index.html"));
});

module.exports = app;
