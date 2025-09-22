
import { Model, Column, Table, PrimaryKey, AutoIncrement, AfterCreate, HasMany, AllowNull, Unique, Length, BeforeCreate, IsEmail, IsNumeric } from 'sequelize-typescript';
import type { PadreAttributes, PadreCreationAttributes } from '../types/padre.type';
import { Alumno } from '../../alumnos';
import { Dni } from '../../../common/models/dni.entity';

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

    //un padre tiene muchos hijos (alumnos)
    @HasMany(() => Alumno,{
        foreignKey: 'idPadre',
        onDelete: 'CASCADE',
    })
    alumnos?: Alumno[];


    @BeforeCreate
    static async validateUniqueDni(instance: Padre) {
        const exists = await Dni.findOne({ where: { dni: instance.dni } });
        if (exists) {
            throw new Error(`El DNI ${instance.dni} ya está registrado`);
        }
    }

    @AfterCreate
    static async createDniInTable(instance: Padre) {
        await Dni.create({ dni: instance.dni });
    }

}