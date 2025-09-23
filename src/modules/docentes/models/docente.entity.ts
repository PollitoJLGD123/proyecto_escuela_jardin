import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, Unique, Length, IsEmail, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DATE } from 'sequelize';
import type { DocenteAttributes, DocenteCreationAttributes } from '../types/docente.type';
import { Usuario } from '../../auth/models/usuario.entity';

@Table({
    tableName: 'docentes',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Docente extends Model<DocenteAttributes, DocenteCreationAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_docente' })
    idDocente!: number;

    @ForeignKey(() => Usuario)
    @AllowNull
    @Column({ field: 'id_usuario', type: DataType.INTEGER, allowNull: true })
    idUsuario?: number | null;

    @BelongsTo(() => Usuario)
    usuario?: Usuario | null;

    @Column({
        field: 'nombre',
        allowNull: false,
        type: DataType.STRING(50),
    })
    nombre!: string;

    @Column({
        field: 'apellido',
        allowNull: false,
        type: DataType.STRING(50),
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
        type: DataType.CHAR(8),
    })
    dni!: string;

    @IsEmail
    @Column({
        field: 'email',
        allowNull: false,
        type: DataType.STRING(100),
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
        type: DataType.CHAR(9),
    })
    telefono?: string;

    @AllowNull
    @Column({
        field: 'fecha_nacimiento',
        type: DATE,
        allowNull: true,
    })
    fechaNacimiento?: Date;

    @AllowNull
    @Column({
        field: 'fecha_ingreso',
        type: DATE,
        allowNull: true,
    })
    fechaIngreso?: Date;
    /*
    @BeforeCreate
    static async validateUniqueDni(instance: Docente) {
        const exists = await Dni.findOne({ where: { dni: instance.dni } });
        if (exists) {
            throw new Error(`El DNI ${instance.dni} ya está registrado`);
        }
    }

    @AfterCreate
    static async createDniInTable(instance: Docente) {
        await Dni.create({ dni: instance.dni });
    } */
}