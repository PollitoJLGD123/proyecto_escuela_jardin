import { DATE, ENUM, Op } from 'sequelize';
import { Model, Column, Table, PrimaryKey, AutoIncrement, BelongsToMany, HasMany, ForeignKey, BelongsTo, HasOne, AllowNull, Unique, Length, Default, BeforeCreate } from 'sequelize-typescript';


@Table({
    tableName: 'alumnos',
    timestamps: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})
export class Alumno extends Model {
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
    fechaNacimiento!: Date;

    @Length({
        min: 1,
        max: 100,
    })
    @AllowNull
    @Column({
        field: 'direccion',
        allowNull: true,
    })
    direccion!: string;

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
}