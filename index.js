const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Seniora!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`);
  });
}

module.exports = app;