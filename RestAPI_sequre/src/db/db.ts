import mysql from 'mysql2'
import { Sequelize, Dialect } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize: Sequelize = new Sequelize(process.env.DATABASE || '', process.env.USERNAME || '', process.env.PASS || '', {
    host: process.env.HOST,
    dialect: 'mysql'
})

