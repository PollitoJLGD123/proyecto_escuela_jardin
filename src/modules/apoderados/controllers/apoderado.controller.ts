import { Request, Response } from 'express';
import ApoderadoService from '../services/apoderado.service';
import { ApoderadoRequest } from '../types/apoderado.type';

export async function getApoderadoById(req: ApoderadoRequest, res: Response) {
    const apoderado = await ApoderadoService.getApoderadoByIdService(Number(req.params.id));
    res.status(200).json({"message": "Apoderado obtenido", "apoderado": apoderado});
}

export async function getApoderados(_: Request, res: Response){
    const apoderados = await ApoderadoService.getApoderadosAllService();
    res.status(200).json({"message": "Apoderados obtenidos", "apoderados": apoderados});
}

export async function createApoderado(req: ApoderadoRequest, res: Response) {
    const apoderado = await ApoderadoService.createApoderadoService(req.body);
    res.status(201).json({"message": "Apoderado creado", "apoderado": apoderado});
}

export async function updateApoderado(req: ApoderadoRequest, res: Response) {
    const apoderado = await ApoderadoService.updateApoderadoService(Number(req.params.id), req.body);
    res.status(200).json({"message": "Apoderado actualizado", "apoderado": apoderado});
}

export async function deleteApoderado(req: ApoderadoRequest, res: Response) {
    await ApoderadoService.deleteApoderadoService(Number(req.params.id));
    res.status(200).json({"message": "Apoderado eliminado"});
}