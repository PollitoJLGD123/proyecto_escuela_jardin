import { CreationAttributes  } from 'sequelize';
import { Alumno } from '../models/alumno.entity';
import createError from 'http-errors';
import { AlumnoEntity } from '../types/alumno.type';
import { Op } from 'sequelize';

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
    
    const alumnoCreated = await Alumno.create(alumno);

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

    if (alumno.dni) {
        const duplicateDni = await Alumno.findOne({
            where: {
                dni: alumno.dni,
                idAlumno: { [Op.ne]: id },
            },
        });

        if (duplicateDni) {
            throw createError(400, "Ya existe un docente con ese DNI");
        }
    }

    const alumnoUpdated = await alumnoExist.update(alumno);
    
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