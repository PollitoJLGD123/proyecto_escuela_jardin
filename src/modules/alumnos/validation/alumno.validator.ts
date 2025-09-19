import Joi from "joi";

export const alumnoValidationSchema = Joi.object({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(8).max(8).required(),
    fechaNacimiento: Joi.date().optional(),
    direccion: Joi.string().optional(),
    telefono: Joi.string().min(9).max(9).optional(), //.allow(null) //otra forma de hacerlo null
});