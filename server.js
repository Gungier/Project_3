var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3001
var path = require('path');
// var db = require("./models")

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  }
  
  else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "/client/public/index.html"));
    });
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

// db.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log("App now listening on port:", port);
    });
//   