import Joi from "joi";

export const alumnoValidationSchema = Joi.object({
    nombre: Joi.string().min(5).max(50).required(),
    apellido: Joi.string().min(5).max(50).required(),
    dni: Joi.string().min(5).max(50).required(),
    fechaNacimiento: Joi.date().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().optional(), //.allow(null) //otra forma de hacerlo null
});