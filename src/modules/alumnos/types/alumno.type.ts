import { Request } from 'express';
import { Alumno } from '../models/alumno.entity';
import { InferAttributes } from 'sequelize';

//type general
export interface AlumnoRequest extends Request {
    body: AlumnoEntity

    params: {
        id: string;
    }
}

//entity type
export interface AlumnoEntity {
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento?: Date;
    direccion?: string;
    telefono?: string;
    idPadre: number;
}

export type AlumnoAttributes = InferAttributes<Alumno>;
export type AlumnoCreationAttributes = Omit<AlumnoEntity, 'idAlumno'>;