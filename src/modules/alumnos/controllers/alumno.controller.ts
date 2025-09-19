import { Request, Response } from 'express';
import { AlumnoGetRequest, AlumnoRequest } from '../types/alumno.type';
import AlumnoService from '../services/alumno.service';

export async function getAlumnoById(req: AlumnoGetRequest, res: Response) {
    const id = parseInt(req.params.id);
    const alumno = await AlumnoService.getAlumnoByIdService(id);
    res.status(200).json({"message": "Obtenido alumno", "alumno": alumno});
}

export async function getAlumnos(_: Request, res: Response){
    const alumnos = await AlumnoService.getAlumnosAllService();
    res.status(200).json({"message": "Obtenidos alumnos", "alumnos": alumnos});
}

export async function createAlumno(req: AlumnoRequest, res: Response) {
    const alumno = await AlumnoService.createAlumnoService(req.body);
    res.status(201).json({"message": "Alumno creado", "alumno": alumno});
}

export async function updateAlumno(req: AlumnoRequest, res: Response) {
    const id = parseInt(req.params.id);
    const alumno = await AlumnoService.updateAlumnoService(id, req.body);
    res.status(200).json({"message": "Alumno actualizado", "alumno": alumno});
}

export async function deleteAlumno(req: AlumnoGetRequest, res: Response) {
    const id = parseInt(req.params.id);
    await AlumnoService.deleteAlumnoService(id);
    res.status(200).json({"message": "Alumno eliminado"});
}