import { Alumno } from '../../modules/alumnos';
import { Docente } from '../../modules/docentes';
import { Padre } from '../../modules/padres';
import { Dni } from './dni.entity';

const modelsList = [
    Alumno,
    Docente,
    Padre,
    Dni,
];

const modelsDict = {
    Alumno,
    Docente,
    Padre,
    Dni,
}

export { modelsList, modelsDict };