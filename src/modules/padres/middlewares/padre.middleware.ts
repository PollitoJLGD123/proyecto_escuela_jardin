import { Response, NextFunction } from 'express';
import { padreValidationSchema, padreParamsValidationSchema } from '../validators/padre.validator';
import { PadreRequest } from '../types/padre.type';

export async function validatePadreBody(req: PadreRequest, res: Response, next: NextFunction) {
    const { error } = padreValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export function validatePadreParams(req: PadreRequest, res: Response, next: NextFunction) {
    const { error, value } = padreParamsValidationSchema.validate(req.params, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    req.params = value;
    next();
}