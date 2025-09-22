import { DATE, ENUM, Op, InferAttributes } from 'sequelize';
import { Model, Column, Table, PrimaryKey, AutoIncrement, BelongsToMany, HasMany, ForeignKey, BelongsTo, HasOne, AllowNull, Unique, Length, Default, BeforeCreate, IsEmail, IsNumeric } from 'sequelize-typescript';
import type { PadreAttributes, PadreCreationAttributes } from '../types/padre.type';


@Table({
    tableName: 'padres',
    timestamps: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})
export class Padre extends Model<PadreAttributes, PadreCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'idPadre',
    })
    idPadre!: number;

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

    //dejamos referencia al padre
}