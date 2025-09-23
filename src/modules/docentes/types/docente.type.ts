import { Request } from 'express';
import { InferAttributes } from 'sequelize';
import { Docente } from '../models/docente.entity';

export interface DocenteRequest extends Request {
    body: DocenteEntity

    params: {
        id: string;
    }
}

export interface DocenteEntity {
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    fechaNacimiento?: Date;
    fechaIngreso?: Date;
    direccion?: string;
    telefono?: string;
    idUsuario?: number | null;
}

export type DocenteAttributes = InferAttributes<Docente>;
export type DocenteCreationAttributes = Omit<DocenteEntity, 'idDocente'>;
