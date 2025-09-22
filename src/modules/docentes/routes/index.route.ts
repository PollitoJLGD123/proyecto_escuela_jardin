import { Router } from 'express';
import { getDocenteById, getDocentes, createDocente, updateDocente, deleteDocente } from '../controllers/docente.controller';
import { validateDocenteBody, validateDocenteParams } from '../middlewares/docente.middleware';

const router = Router();

router.get('/', getDocentes);
router.get('/:id', validateDocenteParams, getDocenteById);
router.post('/', validateDocenteBody, createDocente);
router.put('/:id', validateDocenteParams, validateDocenteBody, updateDocente);
router.delete('/:id', validateDocenteParams, deleteDocente);

export default router;