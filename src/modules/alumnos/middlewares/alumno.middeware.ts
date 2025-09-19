import {  Response, NextFunction } from 'express';
import { alumnoValidationSchema } from '../validation/alumno.validator';
import { AlumnoRequest, AlumnoGetRequest } from '../types/alumno.type';

export async function validateAlumnoCreate(req: AlumnoRequest, res: Response, next: NextFunction) {
    const { error } = alumnoValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export function validateAlumnoUpdate(req: AlumnoRequest, res: Response, next: NextFunction) {
    const { error } = alumnoValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export function validateParams(req: AlumnoGetRequest, res: Response, next: NextFunction) {
    if (!req.params.id) {
        return res.status(400).json({ error: 'Falta el parametro id' });
    }

    if (isNaN(parseInt(req.params.id))) {
        return res.status(400).json({ error: 'El parametro id debe ser un numero' });
    }

    if (parseInt(req.params.id) < 1) {
        return res.status(400).json({ error: 'El parametro id debe ser mayor a 0' });
    }

    next();
}