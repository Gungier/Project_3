var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "oj1fifmgf6wqnupr",
    password: "pbg07ruksixlnrj0",
    database: "x5d0191wb8yksni3"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;