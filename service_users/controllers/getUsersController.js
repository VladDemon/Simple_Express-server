const { User } = require('../models/userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};