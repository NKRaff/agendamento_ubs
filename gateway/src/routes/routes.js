import { Router } from 'express';
import authRoutes from './authRoutes.js'

const routes = Router();

routes.get('/gateway/test', (req, res) => {
    return res.status(200).json({ ok: true })
})

routes.use('/auth', authRoutes)

export default routes