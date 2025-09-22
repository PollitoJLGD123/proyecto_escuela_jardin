
import { Alumno } from '../models/alumno.entity';
import createError from 'http-errors';
import { AlumnoEntity } from '../types/alumno.type';
import { Padre } from '../../padres';
import { Dni } from '../../../common/models/dni.entity';

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

    const personalExist = await Dni.findOne({
        where: {
            dni: alumno.dni
        }
    });

    if (personalExist) {
        throw createError(400, 'Ya existe una persona registrada con ese dni');
    }

    const padre = await Padre.findByPk(alumno.idPadre);

    if (!padre) {
        throw createError(400, 'No existe un padre con ese id');
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

    const padre = await Padre.findByPk(alumno.idPadre);

    if (!padre) {
        throw createError(400, 'No existe un padre con ese id');
    }

    if (alumno.dni) {
        const duplicateDni = await Dni.count({
            where: {
                dni: alumno.dni,
            },
        });

        if (duplicateDni >= 1) {
            throw createError(400, "Ya existe personal con ese DNI");
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