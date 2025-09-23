import { Model, Column, Table, PrimaryKey, AutoIncrement, AllowNull, Unique, Length, IsEmail, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import type { ApoderadoAttributes, ApoderadoCreationAttributes } from '../types/apoderado.type';
import { Usuario } from '../../auth/models/usuario.entity';

@Table({
    tableName: 'apoderados',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Apoderado extends Model<ApoderadoAttributes, ApoderadoCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_apoderado' })
    idApoderado!: number;

    @ForeignKey(() => Usuario)
    @AllowNull
    @Column({ field: 'id_usuario', type: DataType.INTEGER, allowNull: true })
    idUsuario?: number | null;

    @BelongsTo(() => Usuario)
    usuario?: Usuario | null;

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
    @Unique('idx_dni_apoderado')
    @Column({ field: 'dni', allowNull: false, unique: true, type: DataType.CHAR(8) })
    dni!: string;

    @IsEmail
    @Column({ field: 'email', allowNull: false, type: DataType.STRING(100) })
    email!: string;

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
    @Column({ field: 'telefono', allowNull: true, type: DataType.CHAR(9) })
    telefono?: string;

}