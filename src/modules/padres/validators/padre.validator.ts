import Joi from "joi"
import { PadreEntity } from '../types/padre.type';

export const padreValidationSchema = Joi.object<PadreEntity>({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(8).max(8).required(),
    email: Joi.string().email().required(),
    edad: Joi.number().min(0).max(100).optional(),
    direccion: Joi.string().min(1).max(100).optional(),
    telefono: Joi.string().min(9).max(9).optional(),
});

export const padreParamsValidationSchema = Joi.object({
    id: Joi.number().positive().required(),
});