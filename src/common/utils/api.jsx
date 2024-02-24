var mysql = require("mysql");

var hostname = "16c.h.filess.io";
var database = "Stega_wantcopyin";
var port = "3306";
var username = "Stega_wantcopyin";
var password = "4363c1e07332fc83ebd72100773691a49d8d35db";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
