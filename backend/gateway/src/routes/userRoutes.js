import { Router } from 'express';
import UsersController from '../app/controllers/UsersController.js';

const routes = Router();

routes.post('/register', UsersController.register)
routes.post('/schedule', UsersController.schedules)
routes.get('/schedule/:id/confirm', UsersController.confirmSchedule)
routes.get('/schedule/:id/cancel', UsersController.cancelSchedule)

export default routes