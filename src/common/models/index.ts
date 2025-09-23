import { Alumno } from '../../modules/alumnos';
import { Docente } from '../../modules/docentes';
import { Apoderado } from '../../modules/apoderados';
import { Dni } from './dni.entity';

const modelsList = [
    Alumno,
    Docente,
    Apoderado,
    Dni,
];

const modelsDict = {
    Alumno,
    Docente,
    Apoderado,
    Dni,
}

export { modelsList, modelsDict };