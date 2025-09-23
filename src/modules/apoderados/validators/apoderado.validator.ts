import Joi from "joi"
import { ApoderadoEntity } from '../types/apoderado.type';

export const apoderadoValidationSchema = Joi.object<ApoderadoEntity>({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(8).max(8).required(),
    email: Joi.string().email().required(),
    fechaNacimiento: Joi.date().optional(),
    direccion: Joi.string().min(1).max(100).optional(),
    telefono: Joi.string().min(9).max(9).optional(),
    ocupacion: Joi.string().min(1).max(100).optional(),
});

export const apoderadoParamsValidationSchema = Joi.object({
    id: Joi.number().positive().required(),
});