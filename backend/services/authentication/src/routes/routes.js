import { Router } from 'express'
import AuthController from '../app/controllers/AuthController.js'
import fieldsValidate from '../app/middlewares/fieldsValidate.js'
import cpfValidate from '../app/middlewares/cpfValidate.js'

const routes = Router()

routes.post('/login', fieldsValidate, cpfValidate, AuthController.login)
routes.post('/create', fieldsValidate, cpfValidate, AuthController.createAuth)
routes.get('/logout', AuthController.logout)

export default routes