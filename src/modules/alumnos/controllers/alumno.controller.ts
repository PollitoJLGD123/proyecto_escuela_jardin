import { Request, Response } from 'express';
import AlumnoService from '../services/alumno.service';
import { AlumnoRequest } from '../types/alumno.type';

export async function getAlumnoById(req: AlumnoRequest, res: Response) {
    const alumno = await AlumnoService.getAlumnoByIdService(Number(req.params.id));
    res.status(200).json({"message": "Alumno obtenido", "alumno": alumno});
}

export async function getAlumnos(_: Request, res: Response){
    const alumnos = await AlumnoService.getAlumnosAllService();
    res.status(200).json({"message": "Alumnos obtenidos", "alumnos": alumnos});
}

export async function createAlumno(req: AlumnoRequest, res: Response) {
    const alumno = await AlumnoService.createAlumnoService(req.body);
    res.status(201).json({"message": "Alumno creado", "alumno": alumno});
}

export async function updateAlumno(req: AlumnoRequest, res: Response) {
    const alumno = await AlumnoService.updateAlumnoService(Number(req.params.id), req.body);
    res.status(200).json({"message": "Alumno actualizado", "alumno": alumno});
}

export async function deleteAlumno(req: AlumnoRequest, res: Response) {
    await AlumnoService.deleteAlumnoService(Number(req.params.id));
    res.status(200).json({"message": "Alumno eliminado"});
}