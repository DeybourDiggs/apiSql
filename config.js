const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "new_db",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});

module.exports = con;
