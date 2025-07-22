import { Router } from "express";
import UsersController from "../app/controllers/UsersController.js";
import authenticateToken from "../app/middlewares/authenticateToken.js";
import authorizeRoles from "../app/middlewares/authorizeRoles.js";
import authenticateFields from "../app/middlewares/authenticateFields.js";
import authenticateCpf from "../app/middlewares/authenticateCpf.js";
import errorHandler from "../app/middlewares/errorHandler.js";

const routes = Router();

routes.post('/users', authenticateFields, authenticateCpf, UsersController.createUser);
routes.put('/users', authenticateToken, authorizeRoles('Paciente', 'Admin'), authenticateFields, authenticateCpf, UsersController.updateUser);
routes.delete('/users', authenticateToken, authorizeRoles('Admin'), authenticateCpf, UsersController.deleteUser);
routes.get('/users', authenticateToken, UsersController.findAllUsers);
routes.post('/users/findByCpf', authenticateToken, authenticateCpf, UsersController.findUserByCpf);
routes.use(errorHandler);

export default routes;