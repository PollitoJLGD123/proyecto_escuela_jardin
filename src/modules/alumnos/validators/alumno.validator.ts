import Joi from "joi";
import { AlumnoEntity } from '../types/alumno.type';

export const alumnoValidationSchema = Joi.object<AlumnoEntity>({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(8).max(8).optional(),
    fechaNacimiento: Joi.date().required(),
    genero: Joi.string().valid('M','F').optional(),
    direccion: Joi.string().optional(),
    telefonoEmergencia: Joi.string().min(9).max(9).optional(),
    informacionMedica: Joi.string().optional(),
});

export const almunoParamsValidationSchema = Joi.object({
    id: Joi.number().positive().required(),
}).options({ convert: true });