import { Alumno } from '../../modules/alumnos';
import { Docente } from '../../modules/docentes';
import { Apoderado } from '../../modules/apoderados';
import { Usuario } from '../../modules/auth/models/usuario.entity';
import { Rol } from '../../modules/auth/models/rol.entity';

const modelsList = [
    Alumno,
    Docente,
    Apoderado,
    Usuario,
    Rol,
];

const modelsDict = {
    Alumno,
    Docente,
    Apoderado,
    Usuario,
    Rol,
}

export { modelsList, modelsDict };