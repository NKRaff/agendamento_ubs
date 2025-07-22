import { Router } from 'express';
import AuthController from '../app/controllers/AuthController.js';

const routes = Router();

routes.post('/login', AuthController.login)
routes.post('/create', AuthController.createAuth)

export default routes