import { Router } from 'express';
import { getApoderadoById, getApoderados, createApoderado, updateApoderado, deleteApoderado } from '../controllers/apoderado.controller';
import { validateApoderadoBody, validateApoderadoParams } from '../middlewares/apoderado.middleware';

const router = Router();


router.get('/:id', validateApoderadoParams, getApoderadoById);
router.get('/', getApoderados);
router.post('/', validateApoderadoBody , createApoderado);
router.put('/:id',validateApoderadoParams, validateApoderadoBody, updateApoderado);
router.delete('/:id', validateApoderadoParams, deleteApoderado);

export default router;