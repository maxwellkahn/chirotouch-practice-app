const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "potato123",
  database: "PATIENTS",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});
