var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b1c3f9e181629a",
  database: "heroku_c9af6d8237f8099",
  password: process.env.db_password
});

app.get("/", function(req, res) {
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function(err, results) {
    if (err) throw err;
    var count = results[0].count;
    res.render("home", { count: count });
  });
});

app.post("/register", function(req, res) {
  var person = {
    email: req.body.email
  };
  connection.query("INSERT INTO users SET ?", person, function(err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(process.env.PORT, function() {
  console.log("Server running on 8080!");
});
