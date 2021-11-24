import jwt from 'jsonwebtoken'
import express from 'express'

interface requestWithUserid extends express.Request {
    userId?: string
}

export const verityToken = (req: requestWithUserid, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(403).send({
            message: 'No token'
        })
        return
    }

    jwt.verify(token, 'secret', (err, user) => {
        if (err) return res.status(401).send({ message: 'Unauthorized' })
        req.userId = user?.id
        next()
    })
}