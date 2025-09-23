import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { Usuario } from '../models/usuario.entity';
import { Rol } from '../models/rol.entity';
import { comparePassword } from '../../../lib/bycript';

function normalizeBcryptHash(hash: string) {
  if (hash.startsWith('$2y$')) return '$2a$' + hash.substring(4);
  return hash;
}

export function requireRole(roles: string[]) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const email = req.header('x-user-email');
      const password = req.header('x-user-password');
      if (!email || !password) throw createError(401, 'Faltan credenciales');

  const user = await Usuario.findOne({ where: { email }, include: [Rol] });
      if (!user) throw createError(401, 'No autorizado');
      if (user.estado !== 'activo') throw createError(403, `Usuario ${user.estado}`);

      const ok = await comparePassword(password, normalizeBcryptHash(user.password_hash));
      if (!ok) throw createError(401, 'No autorizado');

      const roleName = user.rol?.nombre;
      if (!roleName || !roles.includes(roleName)) {
        throw createError(403, 'Acceso denegado');
      }
      (req as any).authUser = user;
      next();
    } catch (err) {
      next(err);
    }
  };
}
