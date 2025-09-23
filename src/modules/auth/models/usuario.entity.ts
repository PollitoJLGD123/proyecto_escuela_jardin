import { Table, Column, Model, PrimaryKey, AutoIncrement, Unique, AllowNull, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Rol } from './rol.entity';

@Table({
  tableName: 'usuarios',
  timestamps: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Usuario extends Model<{
  id_usuario: number;
  email: string;
  password_hash: string;
  id_rol: number;
  estado: 'activo' | 'inactivo' | 'bloqueado';
}> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id_usuario' })
  id_usuario!: number;

  @Unique('idx_email_usuario')
  @Column({ type: DataType.STRING(100), allowNull: false })
  email!: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  password_hash!: string;

  @ForeignKey(() => Rol)
  @Column({ field: 'id_rol', type: DataType.INTEGER, allowNull: false })
  id_rol!: number;

  @AllowNull(false)
  @Column({ type: DataType.ENUM('activo', 'inactivo', 'bloqueado'), defaultValue: 'activo' })
  estado!: 'activo' | 'inactivo' | 'bloqueado';

  @BelongsTo(() => Rol)
  rol?: Rol;
}
