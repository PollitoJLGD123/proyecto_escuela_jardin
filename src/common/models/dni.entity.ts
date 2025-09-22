
import { Model, Column, Table, PrimaryKey, Unique, Length } from 'sequelize-typescript';

@Table({
    tableName: 'dnis',
    timestamps: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})
export class Dni extends Model {
    @PrimaryKey
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
}