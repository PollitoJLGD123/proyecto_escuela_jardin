import { Router } from 'express';
import { alumnoRouter } from './alumnos';

const router = Router();

router.use('/alumnos', alumnoRouter);

export default router;