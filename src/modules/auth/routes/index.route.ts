import { Router, Request, Response, NextFunction } from 'express';
import { login } from '../controllers/auth.controller';
import { requireRole } from '../utils/role.middleware';

const router = Router();

//Como no hay tokens, se van a tener que enviar las credenciales como headers en cada petición

router.post('/login', login);


router.get('/me', requireRole(['ADMINISTRADOR', 'DOCENTE', 'APODERADO']), (req: Request, res: Response) => {
  const user = (req as any).authUser;
  res.json({ id_usuario: user.id_usuario, email: user.email, rol: user.rol?.nombre, estado: user.estado });
});

// rutas de prueba
router.get('/admin-only', requireRole(['ADMINISTRADOR']), (_req: Request, res: Response) => {
  res.json({ ok: true, area: 'admin' });
});

router.get('/docente-only', requireRole(['DOCENTE']), (_req: Request, res: Response) => {
  res.json({ ok: true, area: 'docentes' });
});

router.get('/apoderado-only', requireRole(['APODERADO']), (_req: Request, res: Response) => {
  res.json({ ok: true, area: 'apoderados' });
});

export default router;
