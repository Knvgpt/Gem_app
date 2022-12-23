// import { get_data } from "./sql";
const mysql = require("mysql2/promise");

// import dotenv from "dotenv";
// dotenv.config();

// import axious from "axious";

exports.handler = async function (event, context) {
  const connection = await mysql.createConnection(
    'mysql://eqf739pfps9gzm03h526:pscale_pw_CHzc7Gr8K1iQoobAZAhj2lT5trcse5lW20LMuO8sZqe@ap-south.connect.psdb.cloud/test?ssl={"rejectUnauthorized":true}'
  );
  const getData = async (req, res) => {
    //clear the existing records
    const [rows] = await connection.query(`Select * from EMDRecords`);
    console.log(rows);
  };
  await getData();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello" }),
  };
};
