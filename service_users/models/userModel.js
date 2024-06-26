const { Sequelize, DataTypes } = require('sequelize');
const { dbUrl } = require('../config.js');

const sequelize = new Sequelize(dbUrl);

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    problems: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

module.exports = {
    User,
    sequelize
};