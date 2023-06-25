
const dotenv = require('dotenv');
const { Pool } = require('pg');
dotenv.config();

const connectionString  = process.env.pgURL;

const pool= new Pool({
    connectionString
})

module.exports=(pool)