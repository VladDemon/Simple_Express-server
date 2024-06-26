const { User } = require('../models/userModel');
const { postHistory } = require('../services/historyService');

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, age, gender, problems } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).send("Not found");
        }
        user.name = name;
        user.lastName = lastName;
        user.age = age;
        user.gender = gender;
        user.problems = problems;
        await user.save();
        await postHistory(user.id, "updated");
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
};