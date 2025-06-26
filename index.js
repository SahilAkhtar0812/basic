const express = require("express");

const app = express();

port = 2000;

app.get("/", (req, res) => {
  console.log("hello");
  return res.send("success");
});
app.listen(port, (req, res) => {
  console.log(`port listen at  localhost:${port}`);
});
