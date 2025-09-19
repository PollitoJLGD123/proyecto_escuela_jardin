import { DATE, ENUM } from 'sequelize';
import { Model, Column, Table, PrimaryKey, AutoIncrement, BelongsToMany, HasMany, ForeignKey, BelongsTo, HasOne, AllowNull, Unique, Length, Default } from 'sequelize-typescript';


@Table({
    tableName: 'alumnos',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
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
        unique: true,
        allowNull: false,
    })
    nombre!: string;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({
        field: 'apellido',
        allowNull: false,
    })
    apellido!: string;

    @Unique
    @Column({
        field: 'dni',
        allowNull: false,
        unique: true,
    })
    dni!: string;

    @Column({
        field: 'fechaNacimiento',
        type: DATE,
        allowNull: false,
    })
    fechaNacimiento!: Date;

    @Column({
        field: 'direccion',
        allowNull: false,
    })
    direccion!: string;

    @AllowNull
    @Column({
        field: 'telefono',
        allowNull: true,
    })
    telefono?: string;

    //dejamos referencia al padre
}