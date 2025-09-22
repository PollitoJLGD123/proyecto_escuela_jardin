import { Request } from 'express';
import { InferAttributes } from 'sequelize';
import { Padre } from '../models/padre.entity';

//type general
export interface PadreRequest extends Request {
    body: PadreEntity;
    params: {
        id: string;
    }
}

export interface PadreEntity {
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    edad: number;
    direccion: string;
    telefono: string;
}

export type PadreAttributes = InferAttributes<Padre>;
export type PadreCreationAttributes = Omit<PadreEntity, 'idPadre'>;