import { Response, NextFunction } from 'express';
import { apoderadoValidationSchema, apoderadoParamsValidationSchema } from '../validators/apoderado.validator';
import { ApoderadoRequest } from '../types/apoderado.type';

export async function validateApoderadoBody(req: ApoderadoRequest, res: Response, next: NextFunction) {
    const { error } = apoderadoValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export function validateApoderadoParams(req: ApoderadoRequest, res: Response, next: NextFunction) {
    const { error, value } = apoderadoParamsValidationSchema.validate(req.params, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    req.params = value;
    next();
}