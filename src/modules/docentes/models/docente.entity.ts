import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey, HasMany, AllowNull, Default, Unique, Length, IsEmail } from 'sequelize-typescript';
import { DATE, InferAttributes, InferCreationAttributes } from 'sequelize';
import type { DocenteAttributes, DocenteCreationAttributes } from '../types/docente.type';

@Table({
    tableName: 'docentes',
    timestamps: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})
export class Docente extends Model<DocenteAttributes, DocenteCreationAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'idDocente',
    })
    idDocente!: number;

    @Column({
        field: 'nombre',
        allowNull: false,
        type: "varchar(50)",
    })
    nombre!: string;

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

    @AllowNull
    @Column({
        field: 'fechaNacimiento',
        type: DATE,
        allowNull: true,
    })
    fechaNacimiento?: Date;

    @AllowNull
    @Column({
        field: 'fechaIngreso',
        type: DATE,
        allowNull: true,
    })
    fechaIngreso?: Date;

}