const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection(
  'mysql://eqf739pfps9gzm03h526:pscale_pw_CHzc7Gr8K1iQoobAZAhj2lT5trcse5lW20LMuO8sZqe@ap-south.connect.psdb.cloud/test?ssl={"rejectUnauthorized":true}'
);

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM EMDRecords", (error, results) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3000");
});
