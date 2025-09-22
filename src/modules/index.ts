import { Router } from 'express';
import { alumnoRouter } from './alumnos';
import { docenteRouter } from './docentes';

const router = Router();

router.use('/alumnos', alumnoRouter);
router.use('/docentes', docenteRouter);

export default router;