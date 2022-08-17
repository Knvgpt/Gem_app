// import mysql from "mysql2/promise";
// import { get_data } from "./sql";
// import dotenv from "dotenv";
// dotenv.config();
// const connection = await mysql.createConnection(process.env.DATABASE_URL);
import axious from "axious";

exports.handler = async function (event, context) {
  // const getData = async (req, res) => {
  //   //clear the existing records
  //   const [rows] = await connection.query(get_data);
  // };
  // await getData();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello" }),
  };
};
