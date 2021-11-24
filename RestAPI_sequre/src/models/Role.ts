import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db'

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
        name: {
        type: DataTypes.STRING
    }
})

export default Role