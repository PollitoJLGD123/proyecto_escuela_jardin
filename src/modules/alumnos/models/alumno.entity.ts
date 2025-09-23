import { DATE } from 'sequelize';
import { Model, Column, Table, PrimaryKey, AutoIncrement, AllowNull, Unique, Length, DataType } from 'sequelize-typescript';
import type { AlumnoAttributes, AlumnoCreationAttributes } from '../types/alumno.type';

@Table({
    tableName: 'alumnos',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Alumno extends Model<AlumnoAttributes, AlumnoCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_alumno' })
    idAlumno!: number;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({ field: 'nombre', allowNull: false, type: DataType.STRING(50) })
    nombre!: string;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({ field: 'apellido', allowNull: false, type: DataType.STRING(50) })
    apellido!: string;

    @Length({
        min: 8,
        max: 8,
    })
    @Unique('idx_dni_alumno')
    @Column({ field: 'dni', allowNull: true, unique: true, type: DataType.CHAR(8) })
    dni!: string;

    @Column({ field: 'fecha_nacimiento', type: DATE, allowNull: false })
    fechaNacimiento!: Date;

    @AllowNull
    @Column({ field: 'genero', type: DataType.ENUM('M', 'F'), allowNull: true })
    genero?: 'M' | 'F';

    @Length({
        min: 1,
        max: 100,
    })
    @AllowNull
    @Column({ field: 'direccion', allowNull: true })
    direccion?: string;

    @Length({
        min: 9,
        max: 9,
    })
    @AllowNull
    @Column({ field: 'telefono_emergencia', allowNull: true, type: DataType.CHAR(9) })
    telefonoEmergencia?: string | null;

    @AllowNull
    @Column({ field: 'informacion_medica', allowNull: true, type: DataType.TEXT })
    informacionMedica?: string | null;

    // Hooks related to a separate dnis table were removed to align with the current schema
}