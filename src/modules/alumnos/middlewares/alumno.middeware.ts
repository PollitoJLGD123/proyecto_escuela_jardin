import {  Response, NextFunction } from 'express';
import { alumnoValidationSchema, almunoParamsValidationSchema } from '../validators/alumno.validator';
import { AlumnoRequest } from '../types/alumno.type';

export async function validateAlumnoBody(req: AlumnoRequest, res: Response, next: NextFunction) {
    const { error } = alumnoValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export function validateAlumnoParams(req: AlumnoRequest, res: Response, next: NextFunction) {
    const { error, value } = almunoParamsValidationSchema.validate(req.params, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    req.params = value;
    next();
}