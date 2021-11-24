import express from 'express'
import { User, Role } from '../models'

export const allAccess =  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).send('public Content')
}

export const userAccess = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).send('User Content')
}