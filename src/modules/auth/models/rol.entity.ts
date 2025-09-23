import { Table, Column, Model, PrimaryKey, AutoIncrement, Unique, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'roles',
  timestamps: false,
})
export class Rol extends Model<{
  id_rol: number;
  nombre: string;
  descripcion?: string;
}> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id_rol' })
  id_rol!: number;

  @Unique('idx_nombre_rol')
  @Column({ type: DataType.STRING(50), allowNull: false })
  nombre!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  descripcion?: string;
}
