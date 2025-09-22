import { Request, Response } from 'express';
import PadreService from '../services/padre.service';
import { PadreRequest } from '../types/padre.type';

export async function getPadreById(req: PadreRequest, res: Response) {
    const padre = await PadreService.getPadreByIdService(Number(req.params.id));
    res.status(200).json({"message": "Padre obtenido", "padre": padre});
}

export async function getPadres(_: Request, res: Response){
    const padres = await PadreService.getPadresAllService();
    res.status(200).json({"message": "Padres obtenidos", "padres": padres});
}

export async function createPadre(req: PadreRequest, res: Response) {
    const padre = await PadreService.createPadreService(req.body);
    res.status(201).json({"message": "Padre creado", "padre": padre});
}

export async function updatePadre(req: PadreRequest, res: Response) {
    const padre = await PadreService.updatePadreService(Number(req.params.id), req.body);
    res.status(200).json({"message": "Padre actualizado", "padre": padre});
}

export async function deletePadre(req: PadreRequest, res: Response) {
    await PadreService.deletePadreService(Number(req.params.id));
    res.status(200).json({"message": "Padre eliminado"});
}