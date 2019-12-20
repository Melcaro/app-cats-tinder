const express = require("express");
const app = express();
const cors = require("cors");
const catsRoute = require("./routes/catsRoute");

app.use(cors());

app.use("/cats", catsRoute);

app.get("/", (req, res) => {
  res.send("home server");
});

app.listen(process.env.PORT || 4500, console.log(`listening the port 4500`));
