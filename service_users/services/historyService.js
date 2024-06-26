const axios = require('axios');
const { port2 } = require('../config');

exports.postHistory = async (userId, action) => {
    await axios.post(`http://localhost:${port2}/historyCreate`, {
        userId,
        action,
    });
};