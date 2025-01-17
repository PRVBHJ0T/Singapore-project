const {Pool}= require("pg");


//postgres connection setup
const pool = new Pool({
    user: "your_username",
    host: "localhost",
    database: "your_database",
    password: "your_password",
    port: 5432,
  });

  module.exports= pool;