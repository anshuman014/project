const express = require("express");

const app = express();

app.use(function (req, res) {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("listening from port 3000");
});
