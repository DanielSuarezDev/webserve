const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.send("Error 404 perro");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
