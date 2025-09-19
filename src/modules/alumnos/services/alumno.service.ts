import { Op } from 'sequelize';
import { Alumno } from '../models/alumno.entity';
import createError from 'http-errors';
import { AlumnoEntity } from '../types/alumno.type';

async function getAlumnoByIdService(id: number): Promise<Alumno> {

    const alumno = await Alumno.findByPk(id);

    if (!alumno) {
        throw createError(404, 'Alumno no encontrado');
    }

    return alumno;
}

async function getAlumnosAllService(): Promise<Alumno[]> {
    const alumnos = await Alumno.findAll();
    return alumnos;
}

async function createAlumnoService(alumno: AlumnoEntity): Promise<Alumno> {

    const alumnoExist = await Alumno.findOne({
        where: {
            dni: alumno.dni
        }
    });

    if (alumnoExist) {
        throw createError(400, 'Ya existe un alumno con ese dni');
    }
    
    const alumnoCreated = await Alumno.create({
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        dni: alumno.dni,
        fechaNacimiento: alumno.fechaNacimiento,
        direccion: alumno.direccion,
        telefono: alumno.telefono,
    });

    if (!alumnoCreated) {
        throw createError(500, 'Error al crear alumno');
    }

    return alumnoCreated;
}

async function updateAlumnoService(id: number, alumno: AlumnoEntity):  Promise<Alumno>{

    const alumnoExist = await Alumno.findByPk(id);

    if (!alumnoExist) {
        throw createError(404, 'Alumno no encontrado');
    }

    const alumnoUpdated = await alumnoExist.update({
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        dni: alumno.dni,
        fechaNacimiento: alumno.fechaNacimiento,
        direccion: alumno.direccion,
        telefono: alumno.telefono,
    });
    
    if (!alumnoUpdated) {
        throw createError(500, 'Error al actualizar alumno');
    }

    return alumnoUpdated;
}

async function deleteAlumnoService(id: number): Promise<void> {

    const alumnoExist = await Alumno.findByPk(id);

    if (!alumnoExist) {
        throw createError(404, 'Alumno no encontrado');
    }

    await alumnoExist.destroy();
}


export default {
    getAlumnoByIdService,
    getAlumnosAllService,
    createAlumnoService,
    updateAlumnoService,
    deleteAlumnoService
}