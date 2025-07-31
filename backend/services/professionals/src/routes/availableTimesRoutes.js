import { Router } from "express"
import AvailableTimesController from "../app/controllers/AvailableTimesController.js"
import authenticateToken from "../app/middlewares/authenticateToken.js"
import authorizeRoles from "../app/middlewares/authorizeRoles.js"
import authenticateCpf from "../app/middlewares/authenticateCpf.js"
import authenticateAvailableTimesFildsValidate from "../app/middlewares/authenticateAvailableTimesFildsValidate.js"
import authenticateProfessionalsFieldsValidate from "../app/middlewares/authenticateProfessionalsFieldsValidate.js"
import errorHandler from "../app/middlewares/errorHandler.js"

const routes = Router()

routes.get('/professionals/available-times', authenticateToken, AvailableTimesController.findAll);
routes.post('/professionals/available-times/id', authenticateToken, AvailableTimesController.findById);
routes.post('/professionals/available-times/cpf', authenticateToken, authenticateCpf, AvailableTimesController.findByProfessionalCpf);
routes.post('/professionals/available-times', authenticateToken, authorizeRoles('Admin', 'Professional'), authenticateAvailableTimesFildsValidate, authenticateCpf, AvailableTimesController.create);
routes.put('/professionals/available-times', authenticateToken, authorizeRoles('Admin', 'Professional'), authenticateAvailableTimesFildsValidate, AvailableTimesController.update);

export default routes