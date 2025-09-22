import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export function generalErrorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {

    console.log(err);

    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Error interno del servidor'
    });
}

export function generalError(_req: Request, _res: Response, next: NextFunction) {
    next(createError(404, 'Recurso no encontrado'));
}