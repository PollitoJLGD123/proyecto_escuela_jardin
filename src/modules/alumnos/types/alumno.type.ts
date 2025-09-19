import { Request } from 'express';

export interface AlumnoRequest extends Request {
    body: AlumnoEntity
}

export interface AlumnoEntity {
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: Date;
    direccion: string;
    telefono?: string;
}

export interface AlumnoGetRequest extends Request {
    params: {
        id: string;
    }
}