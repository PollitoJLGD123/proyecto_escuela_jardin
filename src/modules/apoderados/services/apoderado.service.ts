import { Apoderado } from '../models/apoderado.entity';
import createHttpError from 'http-errors';
import { ApoderadoEntity } from '../types/apoderado.type';
import { Dni } from '../../../common/models/dni.entity';

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
    const personalExist = await Dni.findOne({
        where: {
            dni: apoderado.dni
        }
    });

    if (personalExist) {
        throw createHttpError(400, 'Ya existe una persona registrada con ese dni');
    }
    
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

    if (apoderado.dni) {
        const duplicateDni = await Dni.count({
            where: {
                dni: apoderado.dni,
            },
        });

        if (duplicateDni >= 1) {
            throw createHttpError(400, "Ya existe personal con ese DNI");
        }
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