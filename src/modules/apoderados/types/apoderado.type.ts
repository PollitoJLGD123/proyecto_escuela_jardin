import { Request } from 'express';
import { InferAttributes } from 'sequelize';
import { Apoderado } from '../models/apoderado.entity';

//type general
export interface ApoderadoRequest extends Request {
    body: ApoderadoEntity;
    params: {
        id: string;
    }
}

export interface ApoderadoEntity {
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    fechaNacimiento?: Date;
    direccion?: string;
    telefono?: string;
    ocupacion?: string;
}

export type ApoderadoAttributes = InferAttributes<Apoderado>;
export type ApoderadoCreationAttributes = Omit<ApoderadoEntity, 'idApoderado'>;