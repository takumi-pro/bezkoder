import { User, Role } from "../models";
import express from 'express'

export const checkDuplicateUsernameOrEmail = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    User.findOne({
        where: { username: req.body.username }
    }).then(user => {
        if (user) {
            res.status(400).send({ message: 'Username is already in use' })
            return
        }
    })

    User.findOne({
        where: { email: req.body.email }
    }).then(user => {
        if (user) {
            res.status(400).send({ message: 'Email is already in use' })
            return
        }
        next()
    })
}
