import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/db'

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

export default User