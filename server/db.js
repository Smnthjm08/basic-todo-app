const {Pool} = require("pg");

const pool = new Pool({
    user: "smnth_jm08",
    password: "280103",
    host: "localhost",
    port: "5434",
    database: "perntodo"
});
console.log("DB is connected successfully")

module.exports = pool;

