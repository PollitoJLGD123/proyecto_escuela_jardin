import { Router } from 'express';
import { getPadreById, getPadres, createPadre, updatePadre, deletePadre } from '../controllers/padre.controller';
import { validatePadreBody, validatePadreParams } from '../middlewares/padre.middleware';

const router = Router();


router.get('/:id', validatePadreParams, getPadreById);
router.get('/', getPadres);
router.post('/', validatePadreBody , createPadre);
router.put('/:id',validatePadreParams, validatePadreBody, updatePadre);
router.delete('/:id', validatePadreParams, deletePadre);

export default router;