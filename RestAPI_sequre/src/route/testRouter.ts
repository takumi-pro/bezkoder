import express from 'express'
import { allAccess, userAccess } from '../controllers/UserController'
import { verityToken } from '../middleware/authJwt'

const router:express.Router = express.Router()

/*
POST /api/auth/signup
POST /api/auth/signin
GET  /api/test/all
GET  /api/test/user
GET  /api/test/admin
*/


router.route('/all').get(allAccess)
router.route('/user').get(verityToken, userAccess)
export default router