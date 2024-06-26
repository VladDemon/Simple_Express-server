const { User } = require('../models/userModel');
const { postHistory } = require('../services/historyService');

exports.createUser = async (req, res) => {
    const { name, lastName, age, gender, problems } = req.body;
    try {
        const user = await User.create({ name, lastName, age, gender, problems });
        await postHistory(user.id, "created");
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
};