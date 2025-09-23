import { Docente } from '../models/docente.entity';
import createHttpError from 'http-errors';
import { DocenteEntity } from '../types/docente.type';
import { Op } from 'sequelize';
// import { Dni } from '../../../common/models/dni.entity';

async function getDocentesService(): Promise<Docente[]> {
    const docentes = await Docente.findAll();
    return docentes;
}

async function getDocenteByIdService(idDocente: number): Promise<Docente> {
    const docente = await Docente.findByPk(idDocente);
    if (!docente) {
        throw createHttpError(404, 'Docente no encontrado');
    }
    return docente;
}

async function getDocenteByDniService(dni: string): Promise<Docente> {
    const docente = await Docente.findOne({
        where: {
            dni: dni
        }
    });
    if (!docente) {
        throw createHttpError(404, 'Docente no encontrado');
    }
    return docente;
}

async function createDocenteService(data: DocenteEntity): Promise<Docente> {
    
    // Unique constraints are handled at DB level (idx_dni_docente, idx_email_docente)
    const docente = await Docente.create(data);

    if (!docente) {
        throw createHttpError(500, 'Error al crear docente');
    }

    return docente;
}

async function updateDocenteService(idDocente: number, data: DocenteEntity): Promise<Docente> {

    const docenteExist = await Docente.findByPk(idDocente);

    if (!docenteExist) {
        throw createHttpError(404, 'Docente no encontrado');
    }

    // Let DB unique constraints raise errors if duplicating DNI/email

    const docenteUpdated = await docenteExist.update(data);
    
    if (!docenteUpdated) {
        throw createHttpError(500, 'Error al actualizar docente');
    }

    return docenteUpdated;
}

async function deleteDocenteService(idDocente: number): Promise<void> {

    const docenteExist = await Docente.findByPk(idDocente);

    if (!docenteExist) {
        throw createHttpError(404, 'Docente no encontrado');
    }

    await docenteExist.destroy();
}

export default {
    getDocentesService,
    getDocenteByIdService,
    getDocenteByDniService,
    createDocenteService,
    updateDocenteService,
    deleteDocenteService
}