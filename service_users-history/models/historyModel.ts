import { Sequelize, DataTypes } from 'sequelize';
import { config } from '../config';

const sequelize = new Sequelize(config.dbHistoryUrl);

const UserHistory = sequelize.define("UserHistory", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export { UserHistory, sequelize };