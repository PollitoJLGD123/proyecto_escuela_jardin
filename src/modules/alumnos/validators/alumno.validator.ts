import Joi from "joi";
import { AlumnoEntity } from '../types/alumno.type';

export const alumnoValidationSchema = Joi.object<AlumnoEntity>({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(8).max(8).required(),
    fechaNacimiento: Joi.date().optional(),
    direccion: Joi.string().optional(),
    telefono: Joi.string().min(9).max(9).optional(), //.allow(null) //otra forma de hacerlo null
    idPadre: Joi.number().positive().required(),
});

export const almunoParamsValidationSchema = Joi.object({
    id: Joi.number().positive().required(),
}).options({ convert: true });