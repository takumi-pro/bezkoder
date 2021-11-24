import express from 'express'
import { signup, signin } from '../controllers/AuthController'

const router:express.Router = express.Router()

/*
POST /api/auth/signup
POST /api/auth/signin
GET  /api/test/all
GET  /api/test/user
GET  /api/test/admin
*/

router.route('/signup').post(signup)
router.route('/signin').post(signin)
export default router