const express = require('express');
const { sequelize } = require('./models/userModel');
const service1Routes = require('./routes/service1Routes');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT1 || 3001;

const app = express();
app.use(express.json());

app.use('/api', service1Routes);

sequelize.sync().then(() => {
    console.log("Database synced");
    app.listen(port, () => {
        console.log(`User-service running on port ${port}`);
    });
});