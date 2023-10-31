const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const User = sequelize.define('user', {

    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATEONLY(50),
        allowNull: false,
    }
    
});



module.exports = User;