const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cros = require("cors");
const cookies = require("cookie-parser");
const routes = require("./routes/route");
const log = require("./logs/logger");

const port = process.env.PORT || 5000;

app.use(helmet());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/verConDoc", express.static("apidoc"));
app.use(cros());
app.use(cookies());
app.get("/", (req, res) => {
  res.send("Welcome to home page!");
});
app.listen(port);
routes(app);

log.info(`Server starts on port ${port}`);
