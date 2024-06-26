const express = require('express');
const dotenv = require('dotenv');
import { sequelize } from './models/historyModel';
import service2Routes from './routes/service2Routes';

dotenv.config();

const port = process.env.PORT2 || 3002;

const app = express();
app.use(express.json());

app.use('/api', service2Routes);

sequelize.sync().then(() => {
    console.log("Database synced");
    app.listen(port, () => {
        console.log(`History-service running on port ${port}`);
    });
});