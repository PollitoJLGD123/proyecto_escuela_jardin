
import Joi from 'joi';
import { DocenteEntity } from '../types/docente.type';

export const docenteValidationSchema = Joi.object<DocenteEntity>({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(8).max(8).required(),
    email: Joi.string().email().required(),
    fechaNacimiento: Joi.date().optional(),
    fechaIngreso: Joi.date().optional(),
    direccion: Joi.string().optional(),
    telefono: Joi.string().min(9).max(9).optional(),
});

export const docenteParamsValidationSchema = Joi.object({
    id: Joi.number().positive().required(),
});