import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "../patients/patients.model";

//Модель данных "Пользователи"
//Поля необходимые для создания пользователя
interface UserCreationAttrs{
  email: string;
  password: string;
}

//Таблица в бд и ее колонки
@Table({ tableName: "users" })
export class User extends Model<User,UserCreationAttrs> {

  @ApiProperty({example: "1", description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: "kartashik@gmail.com", description: 'email пользователя'})
  @Column({ type: DataType.STRING, unique: true, allowNull:false })
  email: string;

  @ApiProperty({example: "qwerty", description: 'Пароль пользователя'})
  @Column({ type: DataType.STRING, allowNull:false })
  password: string;

  @ApiProperty({example: "true/false", description: 'Активный/Заблокированный пользователь'})
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  visibility: boolean;

  @HasMany(()=>Patient)
  patients: Patient[]

}