import bcrypt from 'bcryptjs'
import express from 'express'
import jwt from 'jsonwebtoken'

import { User, Role } from '../models'

export const signup = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        roleId: req.body.roleId || 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(user => {
        res.send({ message: 'User was registered successfully' })
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

export const signin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    User.findOne({
        include: Role,
        where: { email: req.body.email }
    }).then(user => {
        if (!user) return res.status(404).send({ message: 'User Not found' })

        console.log(user)
        const passwordIdValid = bcrypt.compareSync(
            req.body.password,
            user.getDataValue('password')
        )

        if (!passwordIdValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Invalid password'
            })
        }

        const token = jwt.sign({ id: user.getDataValue('id') }, 'secret', { expiresIn: '60s' })

        res.status(200).send({
            id: user.getDataValue('id'),
            username: user.getDataValue('username'),
            email: user.getDataValue('email'),
            role: user.getDataValue('role').getDataValue('name'),
            accessToken: token
        })
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}