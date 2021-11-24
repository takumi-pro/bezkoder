import express from 'express'
import dotenv from 'dotenv'

import { sequelize } from './db/db'
import testRouter from './route/testRouter'
import authRouter from './route/authRouter'
import { Role } from './models'

// sequelize.sync({ force: true }).then(() => {
//     Role.create({
//         id: 1,
//         name: 'user'
//     })
//     Role.create({
//         id: 2,
//         name: 'admin'
//     })
// })

dotenv.config()
const app:express.Express = express()
const port:number = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/test',testRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(process.env.DATABASE)
    console.log(`please access: http://localhost:${port}`)
})