const {Pool} = require("pg");

const pool = new Pool({
    user: "smnth_jm08",
    password: "280103",
    host: "localhost",
    port: "5434",
    database: "perntodo"
});

module.exports = pool;

