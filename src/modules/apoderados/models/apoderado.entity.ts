
import { Model, Column, Table, PrimaryKey, AutoIncrement, AfterCreate, HasMany, AllowNull, Unique, Length, BeforeCreate, IsEmail, IsNumeric } from 'sequelize-typescript';
import type { ApoderadoAttributes, ApoderadoCreationAttributes } from '../types/apoderado.type';
import { Alumno } from '../../alumnos';
import { Dni } from '../../../common/models/dni.entity';

@Table({
    tableName: 'apoderados',
    timestamps: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})
export class Apoderado extends Model<ApoderadoAttributes, ApoderadoCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'idApoderado',
    })
    idApoderado!: number;

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

    @IsEmail
    @Column({
        field: 'email',
        allowNull: false,
        type: "varchar(50)",
    })
    email!: string;

    @IsNumeric
    @Column({
        field: 'edad',
        allowNull: true,
        type: "int",
    })
    edad?: number;

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

    //un apoderado tiene muchos hijos (alumnos)
    @HasMany(() => Alumno,{
        foreignKey: 'idApoderado',
        onDelete: 'CASCADE',
    })
    alumnos?: Alumno[];


    @BeforeCreate
    static async validateUniqueDni(instance: Apoderado) {
        const exists = await Dni.findOne({ where: { dni: instance.dni } });
        if (exists) {
            throw new Error(`El DNI ${instance.dni} ya está registrado`);
        }
    }

    @AfterCreate
    static async createDniInTable(instance: Apoderado) {
        await Dni.create({ dni: instance.dni });
    }

}