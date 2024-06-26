const dotenv = require('dotenv');

dotenv.config();

export const config = {
    dbHistoryUrl: process.env.DB_HISTORY_URL as string,
    port2: process.env.PORT2 as string,
};