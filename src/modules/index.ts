import { Router } from 'express';
import { alumnoRouter } from './alumnos';
import { docenteRouter } from './docentes';
import { apoderadoRouter } from './apoderados';

const router = Router();

router.use('/alumnos', alumnoRouter);
router.use('/docentes', docenteRouter);
router.use('/apoderados', apoderadoRouter);

export default router;