import { Router } from 'express';
import UbsController from '../app/controllers/UbsController.js';
import authenticateToken from '../app/middlewares/authenticateToken.js';
import authenticateFields from '../app/middlewares/authenticateFields.js';
import authenticateCnpj from '../app/middlewares/authenticateCnpj.js';
import errorHandler from '../app/middlewares/errorHandler.js';
import authorizeRoles from '../app/middlewares/authorizeRoles.js';

const routes = Router();

routes.post('/ubs', authenticateToken, authorizeRoles('Admin'), authenticateFields, authenticateCnpj, UbsController.create);
routes.get('/ubs', authenticateToken, authorizeRoles('Admin'), UbsController.findAll);
routes.post('/ubs/cnpj', authenticateToken, authorizeRoles('Admin'), authenticateCnpj, UbsController.findByCnpj);
routes.use(errorHandler);

export default routes;

