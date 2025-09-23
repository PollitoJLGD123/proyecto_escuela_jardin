import { Apoderado } from '../models/apoderado.entity';
import createHttpError from 'http-errors';
import { ApoderadoEntity } from '../types/apoderado.type';

async function getApoderadoByIdService(idApoderado: number): Promise<Apoderado> {
    const apoderado = await Apoderado.findByPk(idApoderado);
    if (!apoderado) {
        throw createHttpError(404, 'Apoderado no encontrado');
    }
    return apoderado;
}

async function getApoderadosAllService(): Promise<Apoderado[]> {
    const apoderados = await Apoderado.findAll();
    return apoderados;
}

async function createApoderadoService(apoderado: ApoderadoEntity): Promise<Apoderado> {
    // idx
    const apoderadoCreated = await Apoderado.create(apoderado);

    if (!apoderadoCreated) {
        throw createHttpError(500, 'Error al crear apoderado');
    }

    return apoderadoCreated;
}

async function updateApoderadoService(idApoderado: number, apoderado: ApoderadoEntity):  Promise<Apoderado>{

    const apoderadoExist = await Apoderado.findByPk(idApoderado);

    if (!apoderadoExist) {
        throw createHttpError(404, 'Apoderado no encontrado');
    }

    const apoderadoUpdated = await apoderadoExist.update(apoderado);
    
    if (!apoderadoUpdated) {
        throw createHttpError(500, 'Error al actualizar apoderado');
    }

    return apoderadoUpdated;
}

async function deleteApoderadoService(idApoderado: number): Promise<void> {

    const apoderadoExist = await Apoderado.findByPk(idApoderado);

    if (!apoderadoExist) {
        throw createHttpError(404, 'Apoderado no encontrado');
    }

    await apoderadoExist.destroy();
}


export default {
    getApoderadoByIdService,
    getApoderadosAllService,
    createApoderadoService,
    updateApoderadoService,
    deleteApoderadoService
}