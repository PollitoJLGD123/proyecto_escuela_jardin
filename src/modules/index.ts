import { Router } from 'express';
import { alumnoRouter } from './alumnos';
import { docenteRouter } from './docentes';
import { apoderadoRouter } from './apoderados';
import { authRouter } from './auth';

const router = Router();

router.use('/alumnos', alumnoRouter);
router.use('/docentes', docenteRouter);
router.use('/apoderados', apoderadoRouter);
router.use('/auth', authRouter);

export default router;