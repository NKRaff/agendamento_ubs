import { Router } from 'express';
import ProfessionalController from '../app/controllers/ProfessionalController.js';

const routes = Router();

routes.post('/register', ProfessionalController.register)

export default routes