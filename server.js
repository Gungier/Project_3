var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var path = require("path")
var PORT = process.env.PORT || 3001
// var db = require("./models")

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}))

var Users = require("./routes/Users")
var Currencies = require("./routes/Currencies")

app.use("/users", Users)
app.use("/currencies", Currencies)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

// db.sequelize.sync({
//   force: false }).then(function () {
    
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

