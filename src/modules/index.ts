import { Router } from 'express';
import { alumnoRouter } from './alumnos';
import { docenteRouter } from './docentes';
import { padreRouter } from './padres';

const router = Router();

router.use('/alumnos', alumnoRouter);
router.use('/docentes', docenteRouter);
router.use('/padres', padreRouter);

export default router;