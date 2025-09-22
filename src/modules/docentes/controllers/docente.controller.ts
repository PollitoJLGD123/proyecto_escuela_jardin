import { Request, Response } from 'express';
import DocenteService from '../services/docente.service';
import { DocenteRequest } from '../types/docente.type';

export async function getDocenteById(req: DocenteRequest, res: Response) {
    const docente = await DocenteService.getDocenteByIdService(Number(req.params.id));
    res.status(200).json({"message": "Docente obtenido", "docente": docente});
}

export async function getDocentes(_: Request, res: Response){
    const docentes = await DocenteService.getDocentesService();
    res.status(200).json({"message": "Docentes obtenidos", "docentes": docentes});
}

export async function createDocente(req: DocenteRequest, res: Response) {
    const docente = await DocenteService.createDocenteService(req.body);
    res.status(201).json({"message": "Docente creado", "docente": docente});
}

export async function updateDocente(req: DocenteRequest, res: Response) {
    const docente = await DocenteService.updateDocenteService(Number(req.params.id), req.body);
    res.status(200).json({"message": "Docente actualizado", "docente": docente});
}

export async function deleteDocente(req: DocenteRequest, res: Response) {
    await DocenteService.deleteDocenteService(Number(req.params.id));
    res.status(200).json({"message": "Docente eliminado"});
}