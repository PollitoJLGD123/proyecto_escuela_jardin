import { Router } from 'express';
import { getAlumnoById, getAlumnos, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumno.controller';
import { validateAlumnoCreate, validateAlumnoUpdate, validateParams } from '../middlewares/alumno.middeware';

const router = Router();

router.get('/:id',validateParams, getAlumnoById);
router.get('/', getAlumnos);
router.post('/',validateAlumnoCreate, createAlumno);
router.put('/:id',validateAlumnoUpdate, updateAlumno);
router.delete('/:id',validateParams, deleteAlumno);

export default router;