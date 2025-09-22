import { Padre } from '../models/padre.entity';
import createHttpError from 'http-errors';
import { PadreEntity } from '../types/padre.type';
import { Op } from 'sequelize';

async function getPadreByIdService(idPadre: number): Promise<Padre> {
    const padre = await Padre.findByPk(idPadre);
    if (!padre) {
        throw createHttpError(404, 'Padre no encontrado');
    }
    return padre;
}

async function getPadresAllService(): Promise<Padre[]> {
    const padres = await Padre.findAll();
    return padres;
}

async function createPadreService(padre: PadreEntity): Promise<Padre> {
    const padreExist = await Padre.findOne({
        where: {
            dni: padre.dni
        }
    });

    if (padreExist) {
        throw createHttpError(400, 'Ya existe un padre con ese dni');
    }
    
    const padreCreated = await Padre.create(padre);

    if (!padreCreated) {
        throw createHttpError(500, 'Error al crear padre');
    }

    return padreCreated;
}

async function updatePadreService(idPadre: number, padre: PadreEntity):  Promise<Padre>{

    const padreExist = await Padre.findByPk(idPadre);

    if (!padreExist) {
        throw createHttpError(404, 'Padre no encontrado');
    }

    if (padre.dni) {
        const duplicateDni = await Padre.findOne({
            where: {
                dni: padre.dni,
                idPadre: { [Op.ne]: idPadre },
            },
        });

        if (duplicateDni) {
            throw createHttpError(400, "Ya existe un padre con ese DNI");
        }
    }

    const padreUpdated = await padreExist.update(padre);
    
    if (!padreUpdated) {
        throw createHttpError(500, 'Error al actualizar padre');
    }

    return padreUpdated;
}

async function deletePadreService(idPadre: number): Promise<void> {

    const padreExist = await Padre.findByPk(idPadre);

    if (!padreExist) {
        throw createHttpError(404, 'Padre no encontrado');
    }

    await padreExist.destroy();
}


export default {
    getPadreByIdService,
    getPadresAllService,
    createPadreService,
    updatePadreService,
    deletePadreService
}