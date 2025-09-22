import { Response, NextFunction } from 'express';
import { docenteValidationSchema, docenteParamsValidationSchema } from '../validators/docente.validator';
import { DocenteRequest } from '../types/docente.type';


export async function validateDocenteBody(req: DocenteRequest, res: Response, next: NextFunction) {
    const { error } = docenteValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export async function validateDocenteParams(req: DocenteRequest, res: Response, next: NextFunction) {
    const { error, value } = docenteParamsValidationSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    req.params = value;
    next();
}