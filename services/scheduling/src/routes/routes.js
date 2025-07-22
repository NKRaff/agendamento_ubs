import { Router } from 'express';
import SchedulingController from '../app/controllers/SchedulingController.js';
import authenticateCnpj from '../app/middlewares/authenticateCnpj.js';
import authenticateCpf from '../app/middlewares/authenticateCpf.js'
import errorHandler from '../app/middlewares/errorHandler.js';
import authenticateFields from '../app/middlewares/authenticateFields.js';
import authorizeRoles from '../app/middlewares/authorizeRoles.js';
import authenticateToken from '../app/middlewares/authenticateToken.js';

const router = Router();

router.post('/scheduling',
    authenticateToken,
    authorizeRoles('Admin', 'Professional'),
    authenticateCnpj,
    authenticateFields,
    SchedulingController.create
);
router.get('/scheduling', authenticateToken, SchedulingController.findAll);
router.post('/scheduling/id', authenticateToken, SchedulingController.findById);
router.post('/scheduling/user', authenticateToken, authenticateCpf, SchedulingController.findByUserCpf);
router.post('/scheduling/professional', 
    authenticateToken, 
    authorizeRoles('Admin', 'Professional'),
    SchedulingController.findByProfessionalCpf
);

router.use(errorHandler);

export default router;

