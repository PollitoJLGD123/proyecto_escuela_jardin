import { DATE, ENUM, Op, InferAttributes } from 'sequelize';
import { Model, Column, Table, PrimaryKey, AutoIncrement, BelongsToMany, HasMany, ForeignKey, BelongsTo, HasOne, AllowNull, Unique, Length, Default, BeforeCreate, IsEmail, AfterCreate } from 'sequelize-typescript';
import type { AlumnoAttributes, AlumnoCreationAttributes } from '../types/alumno.type';
import { Padre } from '../../padres';
import { Dni } from '../../../common/models/dni.entity';

@Table({
    tableName: 'alumnos',
    timestamps: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})
export class Alumno extends Model<AlumnoAttributes, AlumnoCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'idAlumno',
    })
    idAlumno!: number;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({
        field: 'nombre',
        allowNull: false,
        type: "varchar(50)",
    })
    nombre!: string;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({
        field: 'apellido',
        allowNull: false,
        type: "varchar(50)",
    })
    apellido!: string;

    @Length({
        min: 8,
        max: 8,
    })
    @Unique
    @Column({
        field: 'dni',
        allowNull: false,
        unique: true,
        type: "char(8)",
    })
    dni!: string;

    @AllowNull
    @Column({
        field: 'fechaNacimiento',
        type: DATE,
        allowNull: true,
    })
    fechaNacimiento?: Date;

    @Length({
        min: 1,
        max: 100,
    })
    @AllowNull
    @Column({
        field: 'direccion',
        allowNull: true,
    })
    direccion?: string;

    @Length({
        min: 9,
        max: 9,
    })
    @AllowNull
    @Column({
        field: 'telefono',
        allowNull: true,
        type: "char(9)",
    })
    telefono?: string;

    //dejamos referencia al padre
    @BelongsTo(() => Padre)
    padre?: Padre;

    @ForeignKey(() => Padre)
    @Column({
        field: 'idPadre',
        allowNull: true,
        type: "int",
        // references: {
        //     model: Padre,
        //     key: 'idPadre',
        // }
    })
    idPadre!: number;

    @BeforeCreate
    static async validateUniqueDni(instance: Alumno) {
        const exists = await Dni.findOne({ where: { dni: instance.dni } });
        if (exists) {
            throw new Error(`El DNI ${instance.dni} ya está registrado`);
        }
    }

    @AfterCreate
    static async createDniInTable(instance: Alumno) {
        await Dni.create({ dni: instance.dni });
    }
}