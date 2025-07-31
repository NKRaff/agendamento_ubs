import { Router } from "express"
import professionalRoutes from "./professionalRoutes.js"
import availableTimesRoutes from "./availableTimesRoutes.js"

const routes = Router()

routes.use(professionalRoutes)  
routes.use(availableTimesRoutes)

export default routes