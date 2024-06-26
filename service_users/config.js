const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dbUrl: process.env.DB_URL,
    port1: process.env.PORT1,
    port2: process.env.PORT2,
};