import { Router } from "express"
import ProfessionalsController from "../app/controllers/ProfessionalsController.js"
import authenticateToken from "../app/middlewares/authenticateToken.js"
import authorizeRoles from "../app/middlewares/authorizeRoles.js"
import authenticateCpf from "../app/middlewares/authenticateCpf.js"
import authenticateAvailableTimesFildsValidate from "../app/middlewares/authenticateAvailableTimesFildsValidate.js"
import authenticateProfessionalsFieldsValidate from "../app/middlewares/authenticateProfessionalsFieldsValidate.js"
import errorHandler from "../app/middlewares/errorHandler.js"

const routes = Router()

routes.post('/professionals', authenticateToken, authorizeRoles('Admin'), authenticateProfessionalsFieldsValidate, authenticateCpf, ProfessionalsController.createProfessional)
routes.put('/professionals', authenticateToken, authorizeRoles('Admin', 'Professional'), authenticateProfessionalsFieldsValidate, authenticateCpf, ProfessionalsController.updateProfessional)
routes.delete('/professionals', authenticateToken, authorizeRoles('Admin'), authenticateCpf, ProfessionalsController.deleteProfessional)
routes.post('/professionals/findByProfessional', authenticateToken, authorizeRoles('Admin'), authenticateCpf, ProfessionalsController.findProfessionalByCpf)
routes.get('/professionals', authenticateToken, authorizeRoles('Admin'), ProfessionalsController.findAllProfessional)

export default routes